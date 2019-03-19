const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    price: Number,
    detail: String
})

const Product = mongoose.model('Products', productSchema)
module.exports = Product