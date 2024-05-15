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
const passwordRoute = require("./routes/password.route")
const sendEmailRoute = require("./routes/sendEmail.route")
const cookieParser = require("cookie-parser")
const cors = require("cors");



const app = express();

dotenv.config();
dbConnect();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }))

app.use(cookieParser());

//app.use(cors({ origin: "http://localhost:3000", credentials: true }))



app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/gigs", gigRoute);
app.use("/orders", orderRoute);
app.use("/conversations", conversationRoute);
app.use("/messages", messageRoute);
app.use("/reviews", reviewRoute);
app.use("/passwords", passwordRoute);
app.use("/sendEmails", sendEmailRoute);


// error handler for unmatched routes
app.use((req, res, next) => {
    res.status(404).send("error");
});



app.listen(PORT, (req, res) => {
    console.log(`listening to the PORT ${PORT}`)
}
)