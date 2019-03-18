const chai = require('chai'),
    should = chai.should(),
    app = require('../app'),
    chaihttp = require('chai-http'),
    mongoose = require('mongoose')

chai.use(chaihttp)
mongoose.set('useFindAndModify', false)
    // before(function(done) {
    //     mongoose.connect('mongodb://localhost:27017/E-commerce-dev', { useNewUrlParser: true }, function() {
    //         mongoose.connection.db.dropDatabase()
    //         done()
    //     })
    // })

after(function(done) {
    mongoose.connect('mongodb://localhost:27017/E-commerce-dev', { useNewUrlParser: true }, function() {
        mongoose.connection.db.dropDatabase()
        done()
    })
})


let userId = ''
describe('Register User', function() {
    it('should return new User object', function(done) {
        chai.request(app).post('/users/register').send({
                email: 'adi@mail.com',
                password: '12345'
            })
            .then(function(response) {
                response.should.have.status(201)
                userId = response.body._id
                done()
            })
            .catch(function(err) {
                console.log(err)
            })
    })
})

describe('Login User', function() {
    it('should return User object', function(done) {
        chai.request(app).post('/users/login').send({
                email: 'adi@mail.com',
                password: '12345'
            })
            .then(function(response) {
                // userId = response.body._id
                response.should.have.status(200)
                done()
            })
            .catch(function(err) {
                console.log(err)
            })
    })
})


let productId = ''
describe('Add Product', function() {
    it('should return new Product object', function(done) {
        chai.request(app).post('/products').send({
                name: 'baru',
                price: 1500,
                detail: 'baru masuk'
            })
            .then(function(response) {
                productId = response.body._id
                response.should.have.status(201)
                done()
            })
            .catch(function(err) {
                console.log(err)
            })
    })
})

describe('Get Product', function() {
    it('should return array of object', function(done) {
        chai.request(app).get('/products')
            .then(function(response) {
                response.should.have.status(200)
                done()
            })
            .catch(function(err) {
                console.log(err)
            })
    })
})

describe('Update Product', function() {
    it('should return Product object', function(done) {
        chai.request(app).put(`/products/${productId}`).send({
                name: 'lama',
                price: 2000,
                detail: 'baru lama'
            })
            .then(function(response) {
                response.should.have.status(200)
                done()
            })
            .catch(function(err) {
                console.log(err)
            })
    })
})

let cartId = ''
describe('Create Cart', function() {
    it('should return new Cart object', function(done) {
        chai.request(app).post('/carts').send({
                userId: userId,
                productId: productId
            })
            .then(function(response) {
                response.should.have.status(201)
                cartId = response.body._id
                done()
            })
            .catch(function(err) {
                console.log(err)
            })
    })
})

describe('Delete Cart', function() {
    it('should return object', function(done) {
        chai.request(app).delete(`/carts/${cartId}`)
            .then(function(response) {
                // response.status.should.equal(200)
                response.should.have.status(200)
                done()
            })
            .catch(function(err) {
                console.log(err)
            })
    })
})

describe('Delete Product', function() {
    it('should return object', function(done) {
        chai.request(app).delete(`/products/${productId}`)
            .then(function(response) {
                // response.status.should.equal(200)
                response.should.have.status(200)
                done()
            })
            .catch(function(err) {
                console.log(err)
            })
    })
})