const router = require('express').Router(),
    controllerProduct = require('../controllers/product')

router.post('/', controllerProduct.addProduct)

router.get('/', controllerProduct.getProducts)

router.put('/:id', controllerProduct.updateProduct)

router.delete('/:id', controllerProduct.deleteProduct)

module.exports = router