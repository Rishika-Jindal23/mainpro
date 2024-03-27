const express = require("express");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 8000;
const userRoute = require("./routes/user.route")
const gigRoute = require("./routes/gig.route")
const orderRoute = require("./routes/order.route")
const conversationRoute = require("./routes/conversation.route")
const messageRoute = require('./routes/message.route')
const reviewRoute = require("./routes/review.route")
const authRoute = require("./routes/auth.route")



const app = express();

dotenv.config();
dbConnect();
app.use(express.json());



app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/gigs", gigRoute);
app.use("/orders", orderRoute);
app.use("/conversations", conversationRoute);
app.use("/messages", messageRoute);
app.use("/reviews", reviewRoute);



app.use("/", (req, res) => {
    res.send("hello from server")
})





app.listen(PORT, (req, res) => {
    console.log(`listening to the PORT ${PORT}`)
}
)
