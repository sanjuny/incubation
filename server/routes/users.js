var express = require('express');
var router = express.Router();

const {postSignup} = require('../Controller/userController')

/* GET users listing. */
router.post('/signup', postSignup)

module.exports = router;
