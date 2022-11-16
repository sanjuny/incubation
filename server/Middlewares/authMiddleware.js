const jwt = require('jsonwebtoken')
const User = ('../Models/userSchema')

const protect = async (req, res, next) => {
    try {
        console.log('jwt verification');
        console.log(req.body.token, 'req.bodyy');
        const token = req.body.token
        const verify = jwt.verify(token, process.env.JWT_SECERT)
        console.log('helooo');
        console.log(verify,'verifyyyyy'); 
        if (verify) {
            req.userId = verify.id
            next()
        } else {
            console.log('tokwn not valit');
            res.json({ status: 'errors', msg: 'Token invalid' })
        }
    } catch (error) {
        res.json({ status: 'error', msg: 'Something error' })
    }
}

module.exports = { protect }