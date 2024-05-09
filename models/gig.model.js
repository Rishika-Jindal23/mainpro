const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GigSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
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
        required: false

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
    username: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true // Set to true by default
    }





}, {
    timestamps: true
});


module.exports = mongoose.model("Gig", GigSchema)

