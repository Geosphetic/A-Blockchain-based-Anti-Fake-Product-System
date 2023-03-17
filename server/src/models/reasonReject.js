const mongoose = require('mongoose')

const reasonReject = mongoose.model('reject reasons',{
    product_id:{
        type: Number
    },
    product_name: {
        type: String
    },
    product_manufacturer: {
        type: String
    },
    rejectReason: {
        type: String
    },
});

module.exports = reasonReject