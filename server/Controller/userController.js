const { db } = require('../Models/userSchema');
const User = require('../Models/userSchema')

const postSignup =(req,res)=>{
    
    let {username, email, phone, password} = req.body;

    User.create({
        username,
        email,
        phone,
        password
    }).then((response)=>{

    })
    console.log(req.body);
}


module.exports = {postSignup}