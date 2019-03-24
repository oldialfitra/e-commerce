const router = require('express').Router(),
controllerUser = require('../controllers/user')
console.log('masuk ke routes')
router.post('/login', controllerUser.loginUser)

router.post('/register', controllerUser.registerUser)

module.exports = router