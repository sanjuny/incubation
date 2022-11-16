import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { MdAddCircleOutline } from 'react-icons/md'


function Booking() {
    const intialValues = { slotNo: '', slotcode: '' }
    const [formvalues, SetFormvalues] = useState(intialValues)
    const [errorMsg, setErrrorMsg] = useState('')
    const [open, setOpen] = useState(false)
    const [slot, setslot] = useState([])
    const [Boolean, setBoolean] = useState(false)
    const [form, setForm] = useState([])
    const [slotmodal, Setslotmodal] = useState(false)
    const [selected, setselected] = useState({ id: '', index: '' })
    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);


    const handleChange = (e) => {
        console.log('callllll');
        const { name, value } = e.target
        SetFormvalues({ ...formvalues, [name]: value })
    }





    const handleSubmit = (e) => {
        console.log(formvalues, 'hello');
        e.preventDefault()
        if (!formvalues.slotcode) {
            setErrrorMsg('Slotcode is required')
        } else if (!formvalues.slotNo) {
            setErrrorMsg('SlotNo is required')
        } else {
            axios.post('http://localhost:7000/admin/createslot', { ...formvalues }).then((response) => {
                console.log(response.data);
                SetFormvalues(intialValues)
                setOpen(false)
                setBoolean(true)
            }).catch((err) => {
                console.log(err.response);
                SetFormvalues(intialValues)
            })
        }
    }


    useEffect(() => {
        axios.get('http://localhost:7000/admin/getslot').then((response) => {
            console.log(response.data, 'response');
            setslot(response.data)

        })
    }, [Boolean, slotmodal])


    const openMODal = () => {
        setOpen(true)
    }
    const closeMODal = () => {
        setOpen(false)
    }

    const openslotmodal = () => {
        console.log('call');
        axios.get('http://localhost:7000/admin/dropdown').then((response) => {
            setForm(response.data)
            console.log(response.data, 'hhhhrhr');
        })
        Setslotmodal(true)
    }

    const closeslotmodal = () => {
        Setslotmodal(false)
    }


    const fulldetails = (slotNo) => {
        setselected({ ...selected, index: slotNo })
        Setslotmodal(true)
    }

    const bookSlot = (e) => {
        e.preventDefault()
        axios.get(`http://localhost:7000/admin/slotbooking?slotId=${selected.index}&companyId=${selected.id}`).then((response) => {
            forceUpdate()
            console.log('function call');
            Setslotmodal(false)
        })
    }

    return (
        <>
            <div className='w-full h-screen flex justify-center items-center  '>
                <div className='w-11/12 h-5/6 '>
                    <div className='h-28 w-full flex justify-between rounded-t-2xl'>
                        <h1 className='mt-5 px-5 font-bold text-2xl underline-offset-8 text-decoration-line: underline'>Booking Slots</h1>
                        <button onClick={openMODal} className='w-max h-max mt-5 mr-5 rounded-2xl bg-cyan-500 shadow-lg shadow-cyan-500/50'>
                            <h4 className='px-3 py-1 text-base text-white flex items-center gap-2'><MdAddCircleOutline /><span>Add solts</span></h4>
                        </button>
                    </div>
                    <div>
                        <div className=' w-full  rounded-b-2xl  p-5 gap-3 grid grid-cols-3'>
                            <div className='h-8 w-10  rounded-2xl bg-green-300  shadow-2xl'><p className='ml-10'>AvailbleSlots</p></div>
                        </div>
                        <div className=' w-full  rounded-b-2xl  p-5  grid grid-cols-3'>
                            <div className='h-8 w-10  rounded-2xl bg-red-300  shadow-2xl'><p className='ml-10'>BookedSlots</p></div>
                        </div>
                        <div className=' w-full  rounded-b-2xl  p-5 gap-3 grid grid-cols-3'>
                            {slot.map((item) => {
                                return (
                                    <div onClick={openslotmodal}>
                                        <div className={`h-36 w-72  rounded-2xl flex justify-center items-center shadow-2xl ${item.status ? " bg-red-300" : "bg-green-300 "}`} onClick={() => item.status ? alert("This slot is Already Booked") : fulldetails(item.slotNo)}>{item.slotNo}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>


            {/* add-modal */}
            {
                open ? (
                    <div id="content" role="main" class="w-full max-w-md mx-auto p-6 absolute left-[40%] top-[20%]">
                        <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-500 dark:border-gray-500 ">
                            <div class="p-4 sm:p-7">
                                <div class="text-center">
                                    <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Add Slots</h1>
                                </div>

                                <div class="mt-5 ">
                                    <form onSubmit={handleSubmit}>
                                        <div class="grid gap-y-6">
                                            <div>
                                                <div class="relative">
                                                    <input onChange={(e) => handleChange(e)} type="number" placeholder='Enter Slot Number :-' id="email" name="slotNo" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
                                                </div>
                                            </div>
                                            <div>
                                                <div class="relative">
                                                    <input onChange={(e) => handleChange(e)} type="text" placeholder='Enter Slot Code :-' id="email" name="slotcode" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
                                                </div>
                                            </div>
                                            <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Submit</button>
                                            <button onClick={closeMODal} type="" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                ) : null
            }


            {/* showmodal */}

            {
                slotmodal ? (
                    <div id="content" role="main" class="w-full max-w-md mx-auto p-6  absolute left-[40%] top-[20%]">
                        <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-500 dark:border-gray-500">
                            <div class="p-4 sm:p-7">
                                <div class="text-center">
                                    <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Book Slot</h1>

                                </div>
                                <div class="mt-5">
                                    <form>
                                        <div class="grid gap-y-6">
                                            <div>
                                                <div class="flex justify-center">
                                                    <div class="mb-3 xl:w-99">
                                                        <select onChange={(e) => { setselected({ ...selected, id: e.target.value }) }} class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300  rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                                            <option selected>Open this select menu</option>
                                                            {form.map((obj) => {
                                                                return (
                                                                    <option value={obj._id}>{obj.company_name}</option>
                                                                )
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <button onClick={(e) => selected.id ? bookSlot(e) : ''} type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Submit</button>
                                            <button onClick={closeslotmodal} type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }

        </>

    )
}


export default Booking
