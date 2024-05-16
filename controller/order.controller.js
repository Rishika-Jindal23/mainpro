const Order = require("../models/order.model")
const Gig = require("../models/gig.model");
const Stripe = require("stripe")





exports.intent = async (req, res, next) => {
    const stripe = new Stripe(process.env.STRIPE);
    const gig = await Gig.findById(req.params?.id)
    console.log("req.params.id-", req.params.id);
    console.log("gig:", gig);

    const paymentIntent = await stripe.paymentIntents.create({
        shipping: {
            name: 'Jenny Rosen',
            address: {
                line1: '510 Townsend St',
                postal_code: '98140',
                city: 'San Francisco',
                state: 'CA',
                country: 'US',
            },
        },
        amount: gig.price * 100,
        currency: "usd",
        description: 'Software development services',
        automatic_payment_methods: {
            enabled: true,
        }
    })
    const newOrder = new Order({
        gigId: gig._id,
        title: gig.title,
        img: gig.cover,
        buyerId: req.userId,
        sellerId: gig.userId,
        price: gig.price,
        payment_intent: paymentIntent.id,
    });
    await newOrder.save();
    res.status(200).send({ clientSecret: paymentIntent.client_secret, })


}

// exports.createOrder = async (req, res, next) => {
//     try {
//         const gig = await Gig.findById(req.params.gigId)
//         console.log(gig)
//         const newOrder = new Order({
//             gigId: gig._id,
//             title: gig.title,
//             buyerId: req.userId,
//             sellerId: gig.userId,
//             price: gig.price,
//             payment_intent: "temp"
//         });
//         console.log("new" + newOrder);
//         await newOrder.save();
//         if (!newOrder) { res.status(404).send("no order created") }

//         res.status(200).send("successfully  placed the order");


//     } catch (err) { res.status(404).send("gig not found by this id") }
// }


exports.getOrders = async (req, res, next) => {
    try {
        let query = {};
        if (req.isSeller) {
            query = { sellerId: req.userId, isCompleted: true };
        } else {
            query = { buyerId: req.userId, isCompleted: true };
        }


        const orders = await Order.find(query);
        // console.log("orders>>>>>>>>>>>", orders)
        if (!orders) { res.status(404).send("not able to get orders") }

        res.status(200).send(orders);

    } catch (error) {
        res.status(404).send("not able to fetch orders ");
    }
}





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






exports.confirm = async (req, res, next) => {
    try {
        console.log(" req.body.payment_intent ------", req.body.payment_intent);
        const orders = await Order.findOneAndUpdate({ payment_intent: req.body.payment_intent },

            {
                $set: {
                    isCompleted: true
                }


            })
        res.status(200).send("order has been confirmed....")
        console.log(orders)

    } catch (err) { res.status(404).send(err) }
}




exports.deleteAllOrders = async (req, res, next) => {
    try {
        const result = await Order.deleteMany({});
        res.status(200).send(`${result.deletedCount} orders deleted successfully`);
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred while deleting orders");
    }
};