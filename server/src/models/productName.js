const mongoose = require('mongoose')

const productName = mongoose.model('productlists',{
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

module.exports = productName