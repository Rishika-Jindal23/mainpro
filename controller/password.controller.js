const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const sendEmail = require("../utils/email");
const { response } = require("express");
const crypto = require("crypto");






exports.forgotPassword = async (request, response) => {
    const { email } = request.body;
    console.log(email)

    const user = await User.findOne({ email })

    //console.log(User.findOne({ email }))

    console.log(user);
    if (!user) {
        return response.status(404).json({ err: "user does not exist" });
    }


    const reset_token = await user.createPasswordResetToken();
    console.log(reset_token);
    await user.save({ validateBeforeSave: false });
    console.log("USER???", user)

    const resetURL = `http://localhost:3000/resetPassword?token=${reset_token}`;
    console.log("reset URL: " + resetURL);
    const message = `Forgot password ? submit a patch request with new password to: ${resetURL} \nOtherwise ignore this mail`;

    try {
        console.log("user email : " + user.email);

        await sendEmail({
            email: user.email,
            subject: 'Your password reset token (valid for 10 min)',
            message
        })

        response.status(200).json({ msg: "token sent" });
    }
    catch (err) {
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save({ validateBeforeSave: false });
        console.log(err.message);
    }
}




exports.resetPassword = async (request, response) => {
    //  console.log("tryyy")
    try {
        console.log(request.body);

        console.log(request.params.token);
        // 1. get user based on token
        const hashedToken = await crypto
            .createHash('sha256')
            .update(request.params.token)
            .digest('hex');

        console.log("HASHEDTOKEN", hashedToken);
        const user = await User.findOne({
            passwordResetToken: hashedToken,
            passwordResetExpires: { $gt: Date.now() }
        });

        console.log("USER>>>", user);
        // 2. if token has not expired & user is login, set new password
        if (!user) {
            return response.status(404).json({ err: "token is invalid or expired" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(request.body.password, salt);
        user.password = hashPassword;
        console.log(user.password);
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save();


        response.status(200).send("password reset successfully");
    }
    catch (err) {
        console.log(err);
    }
}




exports.updatePassword = async (request, response) => {
    try {


        // 1. user from collection
        const { currentPassword, newPassword } = request.body;
        const login_user = request.user;

        let user = await User.findOne({ email: login_user.email });
        if (!user) {
            return response.json({ msg: "user does not exist" });
        }
        if (user.email !== login_user.email) {
            return response.status(404).json({ err: "login user is wrong" });
        }
        // 2. check posted current password is correct
        const passwordMatched = await bcrypt.compare(currentPassword, user.password);
        if (!passwordMatched) {
            return response.json({ err: "Either Your current Password is wrong or You are trying to access someone account" });
        }
        // 3. If then update password

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(newPassword, salt);
        user.password = hashPassword;
        await user.save();
        // 4. log in user and send jwt token 
        const login_token = await user.generateAuthToken();
        response.cookie("jwt", login_token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            httpOnly: true
        });
        response.status(200).json({ login_token });
    }
    catch (err) {
        console.log(err);
    }

}