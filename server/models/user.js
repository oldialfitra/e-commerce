const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcryptjs = require('bcryptjs');

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