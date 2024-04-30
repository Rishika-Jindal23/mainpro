const express = require("express")
const router = express.Router();
const userController = require("../controller/user.controller")
const verifyToken = require("../middleware/jwt")


router.delete("/:id", verifyToken, userController.deleteUser);
router.patch("/", verifyToken, userController.updateUser);
router.get("/", verifyToken, userController.getAllUsers);
router.get("/:id",verifyToken,userController.getUserById);
module.exports = router;