const mongoose = require("mongoose");
const Schema = mongoose;
const MessageSchema = new Schema({
    Conversationid: {
        type: String,
        required: true,

    },
    UserId: {
        type: String,
        required: true,

    },
    desc: {
        type: String,
        required: true,

    },



}, {
    timestamps: true
});
module.exports = mongoose.model("Message", MessageSchema)
