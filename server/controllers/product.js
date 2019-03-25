const product = require('../models/product')

class Product {

    static addProduct(req, res) {
        console.log('masuk ke controller')
        console.log(req.file)
        product.create({
            name: req.body.name,
            image: req.file.cloudStoragePublicUrl,
            price: req.body.price,
            stock: req.body.stock
        })
            .then(function (newProduct) {
                res.status(201).json(newProduct)
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }

    static getProducts(req, res) {
        product.find()
            .then(function (products) {
                res.status(200).json(products)
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }

    static updateProduct(req, res) {
        product.findByIdAndUpdate(req.params.id, { ...req.body })
            .then(function (product) {
                res.status(200).json(product)
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }

    static deleteProduct(req, res) {
        product.findByIdAndDelete(req.params.id)
            .then(function (product) {
                res.status(200).json(product)
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }

    static getOneProduct(req, res) {
        product.findById(req.params.id)
            .then(function (oneProduct) {
                res.status(200).json(oneProduct)
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }
}

module.exports = Product