const mongoose = require('mongoose'),
    Schema = mongoose.Schema


const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Products'
    }
})

const Cart = mongoose.model('Carts', cartSchema)
module.exports = Cart