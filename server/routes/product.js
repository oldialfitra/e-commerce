const router = require('express').Router(),
    controllerProduct = require('../controllers/product'),
    image = require('../helpers/images'),
    authorization = require('../middleware/authorization')



router.get('/', controllerProduct.getProducts)

router.use('', authorization)

router.post('/', image.multer.single('image'), image.sendUploadToGCS, controllerProduct.addProduct)

router.get('/:id', controllerProduct.getOneProduct)

router.put('/:id', controllerProduct.updateProduct)

router.delete('/:id', controllerProduct.deleteProduct)

module.exports = router