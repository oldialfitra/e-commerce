const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcryptjs = require('bcryptjs');
    mongoose.connect('mongodb://localhost:27017/E-commerce-dev', { useNewUrlParser: true })

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [{
            validator: function uniqueEmail(inputEmail) {
                return new Promise((resolve, reject) => {
                    this.model('Users').findOne({
                            email: inputEmail
                        })
                        .then(function(result) {
                            if (result) {
                                throw new Error('Email already exists')
                            } else {
                                resolve()
                            }
                        })
                        .catch(function(err) {
                            reject(err.message)
                        })
                })
            }
        }]
    },
    password: {
        type: String,
        required: true
    },
    role: String
})

userSchema.pre('save', function(next) {
    this.password = bcryptjs.hashSync(this.password, 8)
    next()
})

const Users = mongoose.model('Users', userSchema)
module.exports = Users