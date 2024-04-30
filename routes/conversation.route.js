
const express = require("express");
const router = new express.Router();


const conversationController = require("../controller/conversation.controller")
const verifyToken = require("../middleware/jwt");



router.get("/", verifyToken, conversationController.getConversations);
router.post("/", verifyToken, conversationController.createConversation);
router.get("/single/:id", verifyToken, conversationController.getSingleConversation);
router.put("/:id", verifyToken, conversationController.updateConversation);


module.exports = router; 