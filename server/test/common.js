require('dotenv').config()

let userRegister = {
    email: 'oldiuser@mail.com',
    password: 'password',
    role: 'user'
}

let adminRegister = {
    email: 'oldiadmin@mail.com',
    password: 'admin',
    role: 'admin'
}

let userLogin = {
    email: 'oldiuser@mail.com',
    password: 'password',
}

let adminLogin = {
    email: 'oldiadmin@mail.com',
    password: 'admin',
}

module.exports = {userRegister, userLogin, adminRegister, adminLogin}
