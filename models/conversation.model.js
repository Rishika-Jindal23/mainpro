const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ConversationSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    sellerId: {
        type: String,
        required: true,

    },
    buyerId: {
        type: String,
        required: true,

    },
    readBySeller: {
        type: Boolean,
        required: true,

    },
    readByBuyer: {
        type: Boolean,
        required: true,

    },
    lastMessage: {
        type: String,
        required: false,

    },


}, {
    timestamps: true
});
module.exports = mongoose.model("Conversation", ConversationSchema)
