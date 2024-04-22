const express = require("express");
const router = new express.Router();



const orderController = require("../controller/order.controller");
const verifyToken = require("../middleware/jwt")

router.post("/:gigId", verifyToken, orderController.createOrder);
router.get("/", verifyToken, orderController.getOrders);
router.delete("/:orderId", verifyToken, orderController.deleteOrder);
router.patch("/:orderId/status", verifyToken, orderController.updateOrderStatus);





module.exports = router;