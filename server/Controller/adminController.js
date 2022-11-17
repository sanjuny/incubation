const { application, response } = require("express")
const { create } = require("../Models/formSchema")
const formSchema = require("../Models/formSchema")
const SlotBook = require("../Models/slotSchema")
const jwt = require('jsonwebtoken');



const postAdminLogin = async (req, res)=>{
    try {
        const adminMail = process.env.ADMIN_NAME
        const adminPass = process.env.ADMIN_PASS
        console.log(req.body, 'jjjjj');
        console.log(adminMail,'poiugfd');
        console.log(req.body.email,'kjh');

        if(adminMail == req.body.email){
            console.log("email ok");
            if(adminPass == req.body.password){
                const id = '3sedyrf678a'
                console.log("pass ok");
                const token = jwt.sign({id}, process.env.JWT_SECERT,{
                    expiresIn:300,
                })
                console.log('kk');
                res.status(200).json({auth: true, token: token});
            }else{
                res.json('Incorrect Password')
            }
        }else{
            res.json('Email is not valid no details found')
        }
        
    } catch (error) {
        
    }
}

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


const postForm = async (req, res) => {
    console.log(req.params.id);
    try {
        formSchema.findByIdAndUpdate({ _id: req.params.id },
            {
                $set: { status: "Approved" }
            }).then((res) => {
                if (res) res.status(200).json({ update: true })
            }).catch(err => {
                res.json(err.message)
            })

    } catch (error) {

    }
}

const getApproveForm = async (req, res) => {
    try {
        formSchema.find({ status: "Approved" }).then((data) => {
            res.json(data)
        }).catch((err) => {
            res.json(err)
        })

    } catch (error) {

    }
}


const postReject = async (req, res) => {
    try {
        formSchema.findByIdAndUpdate({ _id: req.params.id },
            {
                $set: { status: "Rejected" }
            }).then((res) => {
                if (res) res.json(200).json({ update: true })
            }).catch(err => {
                res.json(err.message)
            })

    } catch (error) {

    }
}

const getRejectForm = async (req, res) => {
    try {
        formSchema.find({ status: "Rejected" }).then((data) => {
            res.json(data)
        }).catch((err) => {
            res.json(err)
        })

    } catch (error) {

    }
}

const postCreateslot = async (req, res) => {
    try {
        let slot = await SlotBook.findOne({ slotNo: req.body.slotNo })
        if (slot) {
            console.log('llll');
            res.status(401).json('Slot No Already exist')
        } else {
            console.log('kk');
            const Createslot = new SlotBook({
                slotCode: req.body.slotCode,
                slotNo: req.body.slotNo
            })
            await Createslot.save()
            res.json({ res: Createslot })
        }
    } catch (error) {

    }
}

const getSlots = async (req, res) => {

    try {
        SlotBook.find().then((response) => {
            console.log(response);
            res.status(200).json(response)
        }).catch((err) => {
            res.json(err)
        })

    } catch (error) {

    }
}

const getSlotDrop = async (req, res) => {
    try {
        formSchema.find({ status: "Approved" }).then((data) => {
            res.json(data)
        }).catch((err) => {
            res.json(err)
        })
    } catch (error) {

    }
}

const postSlotDrop = async (req, res) => {
    try {
        formSchema.find().then((data) => {
            res.json(data)
        }).catch((err) => {
            res.json(err)
        })
    } catch (error) {

    }
}

const getSlotBooking = async (req, res) => {
    console.log(req.query);
    try {
        await formSchema.findOneAndUpdate({ _id: req.query.companyId }, {
            $set: {
                status: "Booked"
            }
        }).then((response) => {
            if (response) {
                SlotBook.findOneAndUpdate({ slotNo: req.query.slotId }, {
                    $set: {
                        "bookedId": req.query.companyId,
                        "status": true
                    }
                }).then(response => {
                    res.status(200).json(response)
                }).catch(error => res.json(error))
            }
        }).catch(err => res.json(err))

    } catch (error) {
        console.log(error);

    }
}


const postBookingModal = async (req, res) => {
    console.log(req.params.id);
    try {
        formSchema.findOne({ _id : req.params.id }).then((data) => {
            console.log(data,'data');
            res.json(data)
        }).catch((err) => {
            console.log(err,'err');
            res.json(err)
        })
    } catch (error) {
        console.log(error);

    }
}







module.exports = { getForm, postForm, getApproveForm, postReject, getRejectForm, postCreateslot, getSlots, getSlotDrop, postSlotDrop, getSlotBooking, postBookingModal, postAdminLogin }