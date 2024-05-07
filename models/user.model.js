const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require("crypto");
const Validator = require("validator")
const { isValidPassword } = require('mongoose-custom-validators')




const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        $exists: true, // Ensure the field exists
        $ne: "" // Ensure the field is not equal to an empty string
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                return Validator.isEmail(value); // Using validator to check email format
            },
            message: props => `${props.value} is not a valid email address.`
        }

    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: isValidPassword,
            message: 'Password must have at least: 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.'
        }

    },
    img: {
        type: String,
        required: false

    },
    country: {
        type: String,
        required: true


    },
    phone: {
        type: String,
        required: false

    },
    desc: {
        type: String,
        required: false

    },
    isSeller: {
        type: Boolean,
        default: false

    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date


}, {
    timestamps: true
});
//module.exports = mongoose.model("User", userSchema)
userSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');
    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');
    console.log("ResetToken>>>>>>>>", resetToken)
    this.passwordResetExpires = Date.now() + 10 * 80 * 1000;
    return resetToken;
}

// userSchema.methods.generateAuthToken = async function () {
//     try {
//         const token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET);
//         return token;
//     }
//     catch (err) {
//         console.log("error in generating token : " + err);
//     }
// }

const User = new mongoose.model('User', userSchema);
module.exports = User;


