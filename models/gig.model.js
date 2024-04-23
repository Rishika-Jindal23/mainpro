const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GigSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true

    },
    desc: {
        type: String,
        // required: true

    },
    totalstars: {
        type: Number,
        default: 0

    },
    starNumber: {
        type: String,
        default: 0

    },
    cat: {
        type: String,
        // required: true

    },
    price: {
        type: Number,
        required: false

    },
    cover: {
        type: String,
        default: false

    },
    images: {
        type: [String],
        required: false

    },
    shortDesc: {
        type: String,
        // required: true

    },
    deliveryTime: {
        type: Number,
        required: true

    },
    revisionNumber: {
        type: Number,
        required: true

    },
    features: {
        type: [String],
        required: false

    },

    sales: {
        type: Number,
        default: 0

    },





}, {
    timestamps: true
});
module.exports = mongoose.model("Gig", GigSchema)
