const mongoose = require ('mongoose')

const SlotBooking = mongoose.Schema({
    
    slotNo : {
        type: String,
    },
    status : {
        type: Boolean,
        default: false
    },
    slotcode :{
        type: String
    }
})

const SlotBook = mongoose.model('slots',SlotBooking)

module.exports = SlotBook;