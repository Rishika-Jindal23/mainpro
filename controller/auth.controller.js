const User = require("../models/user.model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    try {
        // Check if the user already exists
        let user = req.body.user;

        const existingUser = await User.findOne({ username: req.body.username });
        if (existingUser) {
            return res.status(400).send("User already exists");
        }
        // const salt = bcrypt.genSaltSync(10);
        // Hash the password
        const hash = await bcrypt.hash(req.body.user.password, 5);
        // console.log("hash : ", hash);
        // Create a new user
        const newUser = new User(
            {
                username: user.username,
                email: user.email,
                img: user.img,
                password: hash,
                country: user.country,
                phone: user.phone,
                desc: user.desc,
                isSeller: user.isSeller
            });

        await newUser.save();
        if (!newUser) { res.status(404).send("please enter correct details") }

        res.status(201).send("User has been created");
    } catch (error) {
        console.log(error);
        res.status(404).send("enter correct registration details");

    }
}






exports.login = async (req, res) => {
    try {
        console.log(req.body.username);

        const user = await User.findOne({ username: req.body.username })

        if (!user) return res.status(404).send("user not found")
        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        console.log("is corerct : ", isCorrect);
        if (!isCorrect) return res.status(404).send("wrong username or password");

        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller,
        },
            process.env.JWT_KEY
        );
        const { password, ...info } = user._doc;
        res.cookie("accessToken", token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        }).status(200).send({ token, info });
    } catch (error) {
        res.status(404).send("login unsuccessful")
    }
}





exports.logout = async (req, res) => {

    try {
        res.clearCookie("accessToken", {
            sameSite: "none",
            secure: true,
        }).status(200).send("user has been logged out")
    } catch (error) { res.status(404).send("unable to logout successfully") }
}



