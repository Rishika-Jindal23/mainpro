const express = require("express");
const router = new express.Router();


const passwordController = require("../controller/password.controller");
const verifyToken = require("../middleware/jwt");

router.post("/forgotPassword", passwordController.forgotPassword);
router.patch("/resetPassword/:token", passwordController.resetPassword);
router.patch("/updatePassword", verifyToken, passwordController.updatePassword);

module.exports = router;