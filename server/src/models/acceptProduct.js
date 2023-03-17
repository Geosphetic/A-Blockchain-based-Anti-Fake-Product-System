const mongoose = require('mongoose')

const acceptProduct = mongoose.model('accept product',{
    product_id: {
        type: Number,
    },
    product_name: {
        type: String,
        required: true,
    },
    product_manufacturer: {
        type: String,
        required: true,
    },
    product_details: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = acceptProduct