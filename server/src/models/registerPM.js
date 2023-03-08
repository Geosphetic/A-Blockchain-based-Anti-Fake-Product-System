const mongoose = require('mongoose')

const registerPM = mongoose.model('Product Manufacturers',{
    pm_id:{
        type: Number
    },
    pm_username: {
        type: String
    },
    pm_email: {
        type: String
    },
    pm_password: {
        type: String
    },
});

module.exports = registerPM