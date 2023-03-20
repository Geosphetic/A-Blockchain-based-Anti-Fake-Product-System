const mongoose = require('mongoose')

const registerBP = mongoose.model('Brand Party',{
    bp_id:{
        type: Number
    },
    bp_username: {
        type: String
    },
    bp_email: {
        type: String
    },
    bp_password: {
        type: String
    },
});

module.exports = registerBP