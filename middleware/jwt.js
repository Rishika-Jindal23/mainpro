const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    // if (
    //     !req.headers.authorization ||
    //     !req.headers.authorization.startsWith("Bearer")
    // ) {
    //     return res
    //         .status(401)
    //         .json({ message: "You are not Logged In, Unauthorized user" });
    // }
    // let token = req.headers.authorization.split(" ")[1];
    const token = req.cookies["accessToken"];
    console.log(token)

    if (!token) return res.status(401).send("You are not authenticated or logged in");

    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
        if (err) return res.status(403).send("Token is not valid");
        req.userId = payload?.id;
        req.isSeller = payload.isSeller;
        next();
    });
};

module.exports = verifyToken;