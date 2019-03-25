const user = require('../models/user'),
    decrypt = require('../helpers/decrypt'),
    jwt = require('jsonwebtoken'),
    env = require('dotenv').config()

class User {

    static loginUser(req, res) {
        console.log(req.body)
        user.findOne({
            email: req.body.email
        })
            .then(function (ulogin) {
                console.log(ulogin)
                if (!ulogin) {
                    res.status(404).json({
                        message: 'Username or password wrong'
                    })
                } else {
                    if (decrypt(req.body.password, ulogin.password) === false) {
                        res.status(404).json({
                            message: 'Username or password wrong'
                        })
                    } else {
                        console.log('masuk login')
                        let token = jwt.sign({ email: ulogin.email }, process.env.SECRET)
                        let obj = {
                            token,
                            id: ulogin._id,
                            role: ulogin.role
                        }
                        res.status(200).json(obj)
                    }
                }
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }

    static registerUser(req, res) {
        console.log('masuk register')
        console.log(req.body)
        user.create({
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        })
            .then(function (newUser) {
                console.log('sukses ga nih');
                // console.log(newUser)
                res.status(201).json(newUser)
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }
}

module.exports = User