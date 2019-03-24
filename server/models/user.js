const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcryptjs = require('bcryptjs');
    mongoose.connect('mongodb://localhost:27017/E-commerce-dev', { useNewUrlParser: true })

const userSchema = new Schema({
    email: String,
    password: String
})

userSchema.pre('save', function(next) {
    this.password = bcryptjs.hashSync(this.password, 8)
    next()
})

const Users = mongoose.model('Users', userSchema)
module.exports = Users