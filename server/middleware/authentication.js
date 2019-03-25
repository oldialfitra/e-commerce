const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    if (req.headers.token) {
        try {
            req.userLoggedIn = jwt.verify(req.headers.token, process.env.SECRET)
            next();
        } catch {
            res.status(401).json({ message: `Invalid Token` })
        }
    }
}