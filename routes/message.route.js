const express = require("express");
const router = new express.Router();


const messageController = require("../controller/message.controller")
const verifyToken = require("../middleware/jwt");


router.post("/", verifyToken, messageController.createMessage)
router.get("/:id", verifyToken, messageController.getMessages)




module.exports = router; 