const Review = require("../models/review.model")
const Gig = require("../models/gig.model")
exports.createReview = async (req, res, next) => {

    if (req.isSeller) return res.status(403).send("Sellers can't create a review");

    const newReview = new Review({
        userId: req.userId,
        gigId: req.body.gigId,
        star: req.body.star,
        desc: req.body.desc,
    })


    try {

        const review = await Review.findOne({
            gigId: req.body.gigId,
            // userId: req.body.userId, 
            userId: req.userId
        });
        console.log("review" + review);

        if (review) return res.status(403).send("you have already reviewed this gig");
        const savedReview = await newReview.save();

        const totalStarData = await Gig.findById(req.body.gigId)
        console.log(totalStarData);

        const totalRatingNow = totalStarData.totalstars
        console.log("total rating : " + totalRatingNow);
        const starRatingnow = Number(req.body.star)
        const updated_data = await Gig.findByIdAndUpdate(req.body.gigId, {
            starNumber: starRatingnow,
            totalstars: totalRatingNow + starRatingnow
        })
        console.log(updated_data);
        if (!savedReview) { res.status(404).send("no review created") }
        res.status(201).send(savedReview);

    } catch (error) { res.status(500).send("can't able to create review") }
}

exports.getReview = async (req, res, next) => {
    try {
        const reviews = await Review.find({ gigId: req.params.gigId }).populate('userId');
        //console.log("gigid>>>>>>>>>>>", req.params.gigId)
        console.log(reviews)
        if (!reviews || reviews.length === 0) {
            res.status(404).send('Review not found ')
        }
        else {
            res.status(200).send(reviews);
        }
    } catch (error) {

        res.status(404).send("review not found for this id")
    }
}

exports.deleteReview = async (req, res, next) => {
    try {
        console.log("id" + req.params.reviewId);
        const deletedReview = await Review.findByIdAndDelete(req.params.reviewId);
        console.log(deletedReview);
        if (!deletedReview) {
            return res.status(404).send("Review not found");
        }


        if (deletedReview.userId !== req.userId) {
            return res.status(403).send("You are not authorized to delete this review");
        }

        // Update totalstars in Gig model if needed
        const totalStarData = await Gig.findById(deletedReview.gigId);
        const totalRatingNow = totalStarData.totalstars;
        const starRatingRemoved = deletedReview.star;
        const updated_data = await Gig.findByIdAndUpdate(deletedReview.gigId, {
            starNumber: totalStarData.starNumber - starRatingRemoved,
            totalstars: totalRatingNow - starRatingRemoved
        });

        res.status(200).send("Review deleted successfully");

    } catch (error) {
        //console.log(error);
        res.status(404).send("invalid review id");
    }
};