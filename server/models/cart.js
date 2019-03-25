const mongoose = require('mongoose'),
    Schema = mongoose.Schema
    mongoose.connect('mongodb://localhost:27017/E-commerce-dev', { useNewUrlParser: true })

const cartSchema = new Schema({
    userId: String,
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Products'
    }
})

const Cart = mongoose.model('Carts', cartSchema)
module.exports = Cart