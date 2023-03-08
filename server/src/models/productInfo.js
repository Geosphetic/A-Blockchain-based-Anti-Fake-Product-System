const mongoose = require('mongoose')

const productInfo = mongoose.model('Product Information',{
    product_id:{
        type: Number
    },
    product_name: {
        type: String
    },
    product_manufacturer: {
        type: String
    },
    product_details: {
        type: String
    },
});

module.exports = productInfo