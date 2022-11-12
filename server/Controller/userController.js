const { response } = require('express');
const { db } = require('../Models/userSchema');
const User = require('../Models/userSchema');
const form = require('../Models/formSchema');

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

 const postForm = (req,res)=>{

    let {name, address, city, email, phone, company_name} = req.body;

    form.create({
        name,
        address,
        city,
        email,
        phone,
        company_name
    }).then((response)=>{

    })
    console.log(req.body);

    res.json({message :"messageeeeeeeeeeee"})


}

module.exports = {postSignup, postForm}