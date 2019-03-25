const mongoose = require('mongoose'),
    Schema = mongoose.Schema
    mongoose.connect('mongodb://localhost:27017/E-commerce-dev', { useNewUrlParser: true })

const transactionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    createdAt: Date,
    price: Number
})

const Transaction = mongoose.model('Transactions', transactionSchema)
module.exports = Transaction