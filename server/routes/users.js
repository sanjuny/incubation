var express = require('express');
var router = express.Router();

const {postSignup, postForm, postLogin} = require('../Controller/userController')

/* GET users listing. */
router.post('/signup', postSignup)
router.post('/form', postForm)
router.post('/login', postLogin)

module.exports = router;
