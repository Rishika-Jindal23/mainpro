const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).send("you are not authnticated or logged in")

    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {

        if (!token) res.status(403).send("Token is not valid")
        req.userId = payload.id;
        req.isSeller = payload.isSeller;
        //wait
        next();
    })

};
module.exports = verifyToken;