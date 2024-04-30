const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
    conversationid: {
        type: String,
        required: true,

    },
    userId: {
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
