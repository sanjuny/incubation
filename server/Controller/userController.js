const { response } = require('express');
const { db } = require('../Models/userSchema');
const User = require('../Models/userSchema');
const form = require('../Models/formSchema');
const jwt = require('jsonwebtoken');


/* ----------------------------- GENEERATE TOKEN ---------------------------- */


const postSignup = async (req, res) => {
    try {
        let { username, email, phone, password } = req.body;
        const userExist = await User.findOne({email})
        if(userExist){
            res.status(400)
            throw new Error('user already exist with this email id')
        }else{
            User.create({
                username,
                email,
                phone,
                password
            }).then((response) => {
    
            })
            console.log(req.body);
        }
    } catch (error) {
        res.json('something went wrong')
    }

}

const postForm = (req, res) => {

    let { name, address, city, email, phone, company_name } = req.body;

    form.create({
        name,
        address,
        city,
        email,
        phone,
        company_name
    }).then((response) => {

    })
    console.log(req.body);

    res.json({ message: "messageeeeeeeeeeee" })


}

const postLogin = async(req, res) =>{
    console.log('gggggggggggg');
    try {
        let { email, password } = req.body
        console.log(req.body,'req.body');
        const  user = await User.findOne({email})
        if(user){
            const id = user._id
            if(user.password === password){
                console.log('kkkkkkkk');
                const token = jwt.sign({id}, process.env.JWT_SECERT,{
                    expiresIn:300,
                })
                    console.log('fffffff');
               res.status(200).json({auth: true, token: token});
            }else{
                console.log('in else 1');
                res.status(500).json({ message: "password doesn't exist"})
            }
        }else{
            console.log('in else 2');
            res.status(500).json({ message: "User doesn't exists"});
        }
        
    } catch (error) {
        console.log(error,'errorrrrrrr');
        res.status(500).json(error)
    }
}




module.exports = { postSignup, postForm , postLogin}