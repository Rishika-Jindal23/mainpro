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

// error handler for unmatched routes
app.use((req, res, next) => {
    res.status(404).send("not  found");
});

//global error handler

// app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.json({
//         error: {
//             message: err.message
//         }
//     });
// });


// app.use("/", (req, res) => {
//     res.send("hello from server")
// })

// app.use((err, req, res, next) => {
//     //  const errorStatus = err.Status || 500
//     //const errorMessage = err.Message;
//     console.log(err);
//     return res.status(errorStatus).send(errorMessage);
// })

app.listen(PORT, (req, res) => {
    console.log(`listening to the PORT ${PORT}`)
}
)
