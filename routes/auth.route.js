const express = require("express");
const router = new express.Router();



const authController = require("../controller/auth.controller");
const verifyToken = require("../middleware/jwt");
// const login = require("../controller/auth.controller")
// const logout = require("../controller/auth.controller")

router.post("/register", authController.register)
router.post("/login", authController.login)
router.post("/logout", verifyToken, authController.logout)


module.exports = router; 