const user = require('../models/user'),
    decrypt = require('../helpers/decrypt'),
    jwt = require('jsonwebtoken'),
    env = require('dotenv').config()

class User {

    static login(req, res) {
        console.log(req.body)
        user.findOne({
                email: req.body.email
            })
            .then(function(ulogin) {
                console.log(ulogin)
                console.log(decrypt(req.body.password, ulogin.password))
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
                        let token = jwt.sign({ email: ulogin.email }, process.env.SECRET)
                        console.log(token)
                        res.status(200).json(token)
                    }
                }
            })
            .catch(function(err) {
                res.status(500).json(err)
            })
    }

    static register(req, res) {
        user.create({
                email: req.body.email,
                password: req.body.password
            })
            .then(function(newUser) {
                res.status(201).json(newUser)
            })
            .catch(function(err) {
                res.status(500).json(err)
            })
    }
}

module.exports = User