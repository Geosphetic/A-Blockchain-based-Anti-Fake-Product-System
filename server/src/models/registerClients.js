const mongoose = require('mongoose')

const registerClients = mongoose.model('Customers',{
    client_id:{
        type: Number
    },
    c_username: {
        type: String
    },
    c_email: {
        type: String
    },
    c_password: {
        type: String
    },
});

module.exports = registerClients