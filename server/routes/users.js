var express = require('express');
var router = express.Router();

const {postSignup, postForm} = require('../Controller/userController')

/* GET users listing. */
router.post('/signup', postSignup)
router.post('/form', postForm)

module.exports = router;
