const cart = require('../models/cart')

class Cart {
    static addCart(req, res) {
        cart.create({
                userId: req.body.userId,
                productId: req.body.productId
            })
            .then(function(newCart) {
                res.status(201).json(newCart)
            })
            .catch(function(err) {
                res.status(500).json(err)
            })
    }

    static deleteCart(req, res) {
        cart.findByIdAndDelete(req.params.id)
            .then(function(cart) {
                res.status(200).json(cart)
            })
            .catch(function(err) {
                res.status(500).json(err)
            })
    }
}

module.exports = Cart