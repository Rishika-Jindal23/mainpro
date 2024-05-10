const Gig = require("../models/gig.model")
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/jwt");
const { findByIdAndDelete } = require("../models/user.model");
const mongoose = require('mongoose'); // Import mongoose library


exports.createGig = async (req, res, next) => {
    // console.log(req.body)
    try {
        if (!req.isSeller) return res.status(403).send("Only sellers can create a gig");

        const newGig = new Gig({
            userId: req.userId,
            ...req.body,

        });
        console.log("newGig >>>", newGig);
        const savedGig = await newGig.save();
        if (!savedGig) {
            return res.status(404).send("Gig not created successfully");
        }
        console.log("Gig created successfully: ", savedGig);
        res.status(201).json(savedGig);
    } catch (err) {
        console.error("Error creating gig:", err);
        res.status(500).send("Internal Server Error");
    }
};









exports.deleteGig = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.id);

        // Check if the gig exists
        if (gig?.length === 0) {
            return res.status(404).send("Gig not found");
        }

        console.log("req.params.id--------", req.params.id);
        console.log("gig.userId--------", gig.userId);
        console.log("req.userId--------", req.userId);

        // Create an ObjectId from req.userId
        let reqUserId;
        try {
            reqUserId = new mongoose.Types.ObjectId(req.userId);
        } catch (error) {
            // Handle invalid ObjectId string
            return res.status(400).send("Invalid user ID");
        }
        // Compare ObjectId values
        if (gig.userId.equals(reqUserId)) {

            // gig.isActive = false;
            // await gig.save();
            // console.log("gig deleted>>>>>>>>>>>")

            const myGig = await Gig.findByIdAndDelete(req.params.id);
            if (myGig?.length === 0) {
                return res.status(204).json({ message: "No Gig Found" })
            }
            return res.status(200).send("Gig has   been deleted");
        } else {
            return res.status(403).send("You can only delete your own gig");
        }
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
};











exports.getGig = async (req, res, next) => {
    try {
        //  console.log("call id", req.params.id);
        const gig = await Gig.findById(req.params?.id).populate('userId')
        console.log("call", gig);
        if (!gig) return res.status(404).json({ message: 0 });
        res.status(200).send(gig)
    } catch (error) { res.status(404).send("gig not found by this id") }
};




exports.getGigs = async (req, res, next) => {
    try {

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
                    // { desc: { $regex: q.search, $options: "i" } },
                    { cat: { $regex: q.search, $options: "i" } },
                    // { shortDesc: { $regex: q.search, $options: "i" } },
                ]
                //   title: { $regex: q.search, $options: "i" },
            }),
            //   isActive: true // Filter for active gigs
        };
        // filters.isActive = true;

        const gigs = await Gig.find(filters).sort({ [q.sort]: -1 });
        // const gigs = await Gig.find(filters).sort({ [q.sort]: -1 });
        console.log("gigs------", gigs);
        if (!gigs || gigs.length === 0) {
            return res.status(404).send("No gigs found matching the criteria.");
        }
        res.status(200).json(gigs);
    } catch (error) {
        res.status(404).send("An error occurred while fetching gigs.", error);
    }
};

exports.updateGig = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params?.id);
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






exports.deleteAllGigs = async (req, res, next) => {
    try {
        const deletedGigs = await Gig.deleteMany({});
        res.status(200).json({ message: `${deletedGigs.deletedCount} gigs deleted successfully` });
    } catch (error) {
        //console.log("Error:", error);
        res.status(500).send("Internal Server Error");
    }
};
