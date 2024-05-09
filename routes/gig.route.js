const express = require("express");
const router = new express.Router();
const jwt = require("jsonwebtoken");



const gigController = require("../controller/gig.controller");
const verifyToken = require("../middleware/jwt");


router.post("/", verifyToken, gigController.createGig);
router.delete("/:id", verifyToken, gigController.deleteGig);
router.get("/single/:id", verifyToken, gigController.getGig);
router.get("/", verifyToken, gigController.getGigs);
router.patch("/:id", verifyToken, gigController.updateGig);
router.delete("/", gigController.deleteAllGigs);
// router.get("/", verifyToken, gigController.getGigsById)


module.exports = router;