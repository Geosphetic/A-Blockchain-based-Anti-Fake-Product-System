const mongoose = require('mongoose')

const conn = mongoose.connect('mongodb+srv://kapoorkshetri97:RKapur77@cluster0.4bnwwpm.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})