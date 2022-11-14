var express = require('express');
var router = express.Router();
const {getForm, postReject, getRejectForm, postCreateslot, getSlots, getSlotDrop, postSlotDrop} = require('../Controller/adminController')
const {postForm} = require('../Controller/adminController')
const {getApproveForm} = require("../Controller/adminController")

/* GET home page. */
router.get('/form',getForm)
router.post('/approved/:id',postForm)
router.get('/approved',getApproveForm)
router.post('/rejected/:id',postReject)
router.get('/rejected',getRejectForm)
router.post('/createslot',postCreateslot)
router.get('/getslot',getSlots)
router.get('/dropdown',getSlotDrop)
router.post('/booked',postSlotDrop)


module.exports = router;
