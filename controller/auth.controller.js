const User = require("../models/user.model")
const bcrypt = require("bcrypt");
const register = async (req, res) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 10);
        const newUser = new User({ ...req.body, password: hash });
        await newUser.save();
        res.status(201).send("User has been created")


    } catch (error) { res.status(500).send(error) }
}


const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) return res.status(404).send("user not found")
        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isCorrect) return res.status(404).send("wrong password or password");
        const { password, ...info } = user;
        res.status(200).send(info)
    } catch (error) {

    }

}
const logout = async (req, res) => {

}

module.exports = register, login, logout;