const mongoose = require('mongoose')

const conn = mongoose.connect('mongodb+srv://<DB_USERNAME>:<DB_PASSWORD>@afps.txvc3y1.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})