const router = require('express').Router(),
    controllerCart = require('../controllers/cart')

router.post('/', controllerCart.addCart)

router.delete('/:id', controllerCart.deleteCart)

module.exports = router