const express = require('express'),
    app = express(),
    port = 3000,
    jwt = require('jsonwebtoken'),
    cors = require('cors'),
    env = require('dotenv').config(),
    routerProduct = require('./routes/product'),
    routerUser = require('./routes/user'),
    routerCart = require('./routes/cart'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/E-commerce-dev', { useNewUrlParser: true })
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/products', routerProduct)

app.use('/users', routerUser)

app.use('/carts', routerCart)

module.exports = app

app.listen(port, function() {
    console.log('Listening on port', port)
})