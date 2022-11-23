var express = require('express');
var router = express.Router();

const {postSignup, postForm, postLogin, postCheck} = require('../Controller/userController')

/* GET users listing. */
router.post('/signup', postSignup)
router.post('/form', postForm)
router.post('/login', postLogin)
router.get('/check/:id', postCheck)

module.exports = router;
