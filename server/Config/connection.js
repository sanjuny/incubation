const mongoose = require('mongoose')

const uri = "mongodb+srv://sanjuny07:sanju123@cluster0.pxhkkxr.mongodb.net/incubation?retryWrites=true&w=majority";

const connectDb = async () =>{
    try {
        
        await mongoose.connect(uri,{
            useNewUrlParser:true,

        }, ()=>{
            console.log('Mongo db connected!');
        })
    } catch (error) {
        
            console.log('error in connection of DB');
    }
}

module.exports={connectDb}