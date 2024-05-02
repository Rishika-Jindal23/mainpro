const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ReviewSchema = new Schema({

    gigId: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    star: {
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5]
    },
    desc: {
        type: String,
        required: true,
    }




}, {
    timestamps: true
});
module.exports = mongoose.model("Review", ReviewSchema)
