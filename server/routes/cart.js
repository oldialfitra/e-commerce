const router = require('express').Router(),
    controllerCart = require('../controllers/cart')

router.post('/', controllerCart.addCart)

router.get('/:id', controllerCart.getMyCart)

router.delete('/:userId', controllerCart.deleteCart)

router.post('/transaction', controllerCart.createTransaction)

router.get('/transaction/:userId', controllerCart.getTransaction)

router.delete('/delete/:id', controllerCart.deleteOneCart)


module.exports = router