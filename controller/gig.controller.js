const Gig = require("../models/gig.model")
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/jwt");
const { findByIdAndDelete } = require("../models/user.model");

exports.createGig = async (req, res, next) => {
    if (!req.isSeller) return res.status(403).send("only sellers can create  gig")
    const newGig = new Gig({
        userId: req.userId,
        ...req.body,
    })

    try {
        const savedGig = await newGig.save();
        if (!savedGig) { res.status(404).send("gig not created successfully") }
        res.status(201).json(savedGig);

    } catch (err) {
        res.status(404).send("unsuccesful");
    }
};

exports.deleteGig = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.id);
        if (gig.userId !== req.userId) return res.status(403).send("you can delete only your gig");
        await Gig.findByIdAndDelete(req.params.id);
        res.status(200).send("Gig has been deleted")
    } catch (error) {
        res.status(404).send("invalid gig id")
    }
};
exports.getGig = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.id);
        if (!gig) return res.status(404).send("gig not found");
        res.status(200).send(gig)
    } catch (error) { res.status(404).send("gig not found by this id") }
};



exports.getGigs = async (req, res, next) => {
    try {
        //console.log("hhelloo");
        const q = req.query;
        const filters = {
            ...(q.userId && { userId: q.userId }),
            ...(q.cat && { cat: q.cat }),
            ...((q.min || q.max) && {
                price: {
                    ...(q.min && { $gt: q.min }),
                    ...(q.max && { $lt: q.max }),
                },
            }),
            ...(q.search && {
                $or: [
                    { title: { $regex: q.search, $options: "i" } },
                    { desc: { $regex: q.search, $options: "i" } },
                    { cat: { $regex: q.search, $options: "i" } },
                    { shortDesc: { $regex: q.search, $options: "i" } },


                ]
                //   title: { $regex: q.search, $options: "i" },
            }),
        };
        const gigs = await Gig.find(filters);
        if (!gigs || gigs.length === 0) {
            return res.status(404).send("No gigs found matching the criteria.");
        }
        res.status(200).json(gigs);
    } catch (error) {
        res.status(404).send("An error occurred while fetching gigs.");
    }
};



exports.updateGig = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.id);
        if (!gig) return res.status(404).send("Gig not found");

        if (gig.userId !== req.userId) return res.status(403).send("You can only update your own gig");

        // Update the gig with the new data
        Object.assign(gig, req.body);

        const updatedGig = await gig.save();
        if (!updatedGig) { res.status(404).send("not able to update gig") }
        res.status(200).json(updatedGig);
    } catch (error) {
        res.status(404).send("gig id is invalid");
    }
};
