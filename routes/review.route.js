const express = require("express");
const router = new express.Router();



const reviewController = require("../controller/review.controller");
const verifyToken = require("../middleware/jwt")

router.post("/", verifyToken, reviewController.createReview);
router.get("/:gigId", reviewController.getReview)
router.delete("/:reviewId", verifyToken, reviewController.deleteReview);
router.delete('/', reviewController.deleteAllReviews);



module.exports = router;