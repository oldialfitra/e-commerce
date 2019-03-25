const app = require('../app'),
    chai = require('chai'),
    expect = chai.expect,
    chaiHttp = require('chai-http'),
    { userRegister, userLogin, adminRegister, adminLogin } = require('./common')

require('dotenv').config()

chai.use(chaiHttp)

describe('Route /user', function (done) {
    describe('/post /users/register', function () {
        describe('Success', function () {
            describe('As a common user', function () {
                it.only('return status code 201 and object', function (done) {
                    chai.request(app).post('/users/register').send(userRegister).end(function (err, res) {
                        expect(err).to.be.null
                        expect(res).to.have.status(201)
                        expect(res.body).to.have.be.an('object')
                        expect(res.body.details).to.haveOwnProperty('email')
                        expect(res.body.details).to.haveOwnProperty('password')
                        expect(res.body.details).to.haveOwnProperty('role')
                        done()
                    })
                })
            })
            describe('As a admin', function () {
                it.only('return status code 201 and object', function (done) {
                    chai.request(app).post('/users/register').send(userRegister).end(function (err, res) {
                        expect(err).to.be.null
                        expect(res).to.have.status(201)
                        expect(res.body).to.have.be.an('object')
                        expect(res.body.details).to.haveOwnProperty('email')
                        expect(res.body.details).to.haveOwnProperty('password')
                        expect(res.body.details).to.haveOwnProperty('role')
                        done()
                    })
                })
            })
        })

        describe('Fail', function () {
            it.only('return status code 500', function (done) {
                chai.request(app).post('/users/register').send({
                    email: '',
                    password: '',
                    role: ''
                }).end(function (err, res) {
                    expect(res).to.have.status(500)
                    done()
                })

            })
        })
    })

    describe('post /users/login', function () {
        describe('Success', function () {
            describe('As common user', function () {
                it.only('return status code 200 and object', function (done) {
                    chai.request(app).post('/users/login').send(userLogin).end(function (err, res) {
                        expect(err).to.be.null
                        expect(res).to.have.status(200)
                        expect(res.body).to.have.be.an('object')
                        done()
                    })
                })
            })

            describe('As admin user', function () {
                it.only('return status code 200 and object', function (done) {
                    chai.request(app).post('/users/login').send(adminLogin).end(function (err, res) {
                        expect(err).to.be.null
                        expect(res).to.have.status(200)
                        expect(res.body).to.have.be.an('object')
                        done()
                    })
                })
            })
        })

        describe('Fail', function () {
            describe('As common user', function () {
                it.only('return status code 500 and object', function (done) {
                    chai.request(app).post('/users/login').send({
                        email: '',
                        password: ''
                    }).end(function (err, res) {
                        expect(res).to.have.status(500)
                        done()
                    })
                })
            })
        })
    })
})