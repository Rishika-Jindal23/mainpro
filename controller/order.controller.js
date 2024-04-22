const Order = require("../models/order.model")
const Gig = require("../models/gig.model");



exports.createOrder = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.gigId)
        console.log(gig)
        const newOrder = new Order({
            gigId: gig._id,
            title: gig.title,
            buyerId: req.userId,
            sellerId: gig.userId,
            price: gig.price,
            payment_intent: "temp"
        });
        console.log("new" + newOrder);
        await newOrder.save();
        if (!newOrder) { res.status(404).send("no order created") }

        res.status(200).send("successfully  placed the order");


    } catch (err) { res.status(404).send("gig not found by this id") }
}


exports.getOrders = async (req, res, next) => {
    try {
        let query = {};
        if (req.isSeller) {
            query = { sellerId: req.userId };
        } else {
            query = { buyerId: req.userId };
        }
        //console.log(query);

        const orders = await Order.find(query);
        if (!orders) { res.status(404).send("not able to get orders") }
        //console.log(orders);
        res.status(200).send(orders);

    } catch (error) {
        res.status(404).send("not able to fetch orders ");
    }
}



// exports.deleteOrder = async (req, res, next) => {
//     try {
//         const order = await Order.findById(req.params.orderId);

//         // Check if order exists
//         if (!order) {
//             return res.status(404).send("Order not found");
//         }

//         // Check if the authenticated user is the owner of the order
//         //  if (order.buyerId !== req.userId && order.sellerId !== req.userId) {
//         //    return res.status(403).send("You are not authorized to delete this order");
//         //}

//         // If authorized, delete the order
//         await order.remove();
//         res.status(200).send("Order deleted successfully");
//     } catch (error) {
//         res.status(500).send(error);
//     }
// };



exports.deleteOrder = async (req, res, next) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.orderId);
        if (!order) {
            return res.status(404).send("Order not found");
        }
        if (order.buyerId !== req.userId && order.sellerId !== req.userId) {
            return res.status(403).send("You are not authorized to delete this order");
        }
        res.status(200).send("Order deleted successfully");
    } catch (error) {
        console.log(error);
        res.status(404).send("order id is invalid");
    }
};

exports.updateOrderStatus = async (req, res, next) => {
    try {
        const { status } = req.body;

        const order = await Order.findByIdAndUpdate(req.params.orderId, { status }, { new: true, runValidators: true });
        if (!order) {
            return res.status(404).send("Order not found");
        }
        else {
            res.status(200).send(order);
        }

    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(404).send("status is wrong");
        }
        else {
            res.status(500).send("not able to update status");
        }
    }
};





