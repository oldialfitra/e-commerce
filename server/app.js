const express = require('express'),
    app = express(),
    port = 5000,
    jwt = require('jsonwebtoken'),
    cors = require('cors'),
    env = require('dotenv').config(),
    routerProduct = require('./routes/product'),
    routerUser = require('./routes/user'),
    routerCart = require('./routes/cart'),
    authentication = require('./middleware/authentication')
mongoose = require('mongoose');

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
console.log('masuk ke app')

app.use('/users', routerUser)

app.use('', authentication)

app.use('/products', routerProduct)

app.use('/carts', routerCart)

module.exports = app

app.listen(port, function() {
    console.log('Listening on port', port)
})