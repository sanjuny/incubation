const mongoose = require ('mongoose')

const formSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is required']
    },

    email:{
        type:String,
        required:[true, "Email is required"],
        unique:true
    },

    phone:{
        type:Number,
        required:[true, "Phone Number is required"],
        unique:true,
        minlength:[10,"phone number should need 10"]
    },

    address:{
        type:String,
        required:[true,"address is required"],

    },

    city:{
        type:String,
        required:[true,"city is required"]
    },

    company_name:{
        type:String,
        required:[true,"compnay name is required"]
    },

    status:{
        type:String,
        default:"pending",
        required:true
    }

})
const form = mongoose.model("form",formSchema)

module.exports = form