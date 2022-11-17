var express = require('express');
var router = express.Router();
const {getForm, postReject, getRejectForm, postCreateslot, getSlots, getSlotDrop, postSlotDrop, getSlotBooking, postBookingModal, postAdminLogin} = require('../Controller/adminController')
const {postForm} = require('../Controller/adminController')
const {getApproveForm} = require("../Controller/adminController");
const check = require('../Middlewares/authMiddleware');


/* GET home page. */
router.get('/form',getForm)
router.post('/approved/:id',postForm)
router.get('/approved',check,getApproveForm)
router.post('/rejected/:id',postReject)
router.get('/rejected',getRejectForm)
router.post('/createslot',postCreateslot)
router.get('/getslot',getSlots)
router.get('/dropdown',getSlotDrop)
router.post('/booked',postSlotDrop)
router.get('/slotbooking',getSlotBooking)
router.post('/bookingModal/:id',postBookingModal)
router.post('/adminlogin',postAdminLogin)


    
module.exports = router;
