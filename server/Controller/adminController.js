const { application } = require("express")
const { create } = require("../Models/formSchema")
const formSchema = require("../Models/formSchema")
const SlotBook = require("../Models/slotSchema")

const getForm = async (req, res) => {
    try {
        formSchema.find({ status: "pending" }).then((data) => {
            res.json(data)
        }).catch((err) => {
            res.json(err)
        })
    } catch (error) {

    }
}


const postForm = async(req, res) => {
    console.log(req.params.id);
    try {
        formSchema.findByIdAndUpdate({ _id: req.params.id},
            {
                $set : {status : "Approved"}
            }).then((res)=>{
                if(res) res.status(200).json({update:true})
            }).catch(err=>{
                res.json(err.message)
            })

    } catch(error) {

    }
}

const getApproveForm = async(req,res)=>{
    try {
        formSchema.find({status:"Approved"}).then((data)=>{
            res.json(data)
        }).catch((err)=>{
            res.json(err)
        })
        
    } catch (error) {
        
    }
}


const postReject = async(req,res)=>{
    try {
        formSchema.findByIdAndUpdate({ _id:req.params.id},
            {
                $set:{status:"Rejected"}
            }).then((res)=>{
                if(res) res.json(200).json({update:true})
            }).catch(err=>{
                res.json(err.message)
            })
       
    } catch (error) {
        
    }
}

const getRejectForm =  async(req,res)=>{
    try {
        formSchema.find({status: "Rejected"}).then((data)=>{
            res.json(data)
        }).catch((err)=>{
            res.json(err)
        })
        
    } catch (error) {
        
    }
}

const postCreateslot = async(req,res)=>{
    try {
        let slot = await SlotBook.findOne({slotNo: req.body.slotNo})
        if(slot){
            console.log('llll');
            res.status(401).json('Slot No Already exist')
        }else{
            console.log('kk');
            const Createslot = new SlotBook({
                slotCode: req.body.slotCode,
                slotNo: req.body.slotNo
            })
            await Createslot.save()
            res.json({res:Createslot})
        }
    } catch (error) {
        
    }
}

const getSlots = async(req,res)=>{

    try {
        SlotBook.find().then((response)=>{
            console.log(response);
            res.status(200).json(response)
        }).catch((err)=>{
            res.json(err)
        })
        
    } catch (error) {
        
    }
}

const getSlotDrop = async(req,res)=>{
    try {
        formSchema.find({status : "Approved"}).then((data)=>{
            res.json(data)
        }).catch((err)=>{
            res.json(err)
        })
    } catch (error) {
        
    }
}

const postSlotDrop = async(req,res)=>{
    try {
        formSchema.find({status : "Booked"}).then((data)=>{
            res.json(data)
        }).catch((err)=>{
            res.json(err)
        })
    } catch (error) {
        
    }
}




module.exports = { getForm, postForm, getApproveForm, postReject, getRejectForm, postCreateslot, getSlots, getSlotDrop, postSlotDrop }