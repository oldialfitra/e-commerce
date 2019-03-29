const cart = require('../models/cart'),
    transaction = require('../models/transaction')

class Cart {
    static addCart(req, res) {
        cart.create({
            userId: req.body.userId,
            productId: req.body.productId
        })
            .then(function (newCart) {
                console.log('ini add cart')
                res.status(201).json(newCart)
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }

    static deleteCart(req, res) {
        console.log('masuk ke delete')
        console.log(req.params)
        cart.deleteMany({
            userId: req.params.userId
        })
            .then(function (cart) {
                console.log('berhasil hapus')
                res.status(200).json(cart)
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }

    static getMyCart(req, res) {
        console.log('masuk ke get my cart')
        cart.find({
            userId: req.params.id
        })
            .populate('productId')
            .then(function (carts) {
                res.status(200).json(carts)
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }

    static createTransaction(req, res) {
        transaction.create({
            userId: req.body.userId,
            createdAt: new Date(),
            price: req.body.price
        })
            .then(function (newTransaction) {
                res.status(201).json(newTransaction)
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }

    static getTransaction(req, res) {
        transaction.find({
            userId: req.params.userId
        }).populate('userId')
            .then(function (carts) {
                console.log(carts)
                res.status(200).json(carts)
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }

    static deleteOneCart(req, res) {
        cart.findByIdAndDelete(req.params.id)
        .then(function (cart) {
            res.status(200).json(cart)
        })
        .catch(function (err) {
            res.status(500).json(err)
        })
    }
}

module.exports = Cart