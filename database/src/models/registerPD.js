const mongoose = require('mongoose')

const registerPD = mongoose.model('Product Distributors',{
    pd_id:{
        type: Number
    },
    pd_username: {
        type: String
    },
    pd_email: {
        type: String
    },
    pd_password: {
        type: String
    },
});

module.exports = registerPD