var express = require('express');
var router = express.Router();
const {getForm} = require('../Controller/adminController')

/* GET home page. */
router.get('/form',getForm)

module.exports = router;
