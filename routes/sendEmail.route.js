const express = require("express");
const router = new express.Router();



const sendEmailController = require("../controller/sendEmail.controller")
const verifyToken = require("../middleware/jwt")

router.post("/", sendEmailController.createEmail);


module.exports = router;