const formSchema = require("../Models/formSchema")

const getForm = async(req,res)=>{
console.log('kjhgf');
    try {
        formSchema.find({status:"pending"}).then((data)=>{
            res.json(data)
        }).catch((err)=>{
            res.json(err)
        })
    }catch (error){

    }
}

module.exports={getForm}