import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';


function Applicants() {
    const [boolean, setBoolean] = useState([])
    const [form, setForm] = useState([])
    const [open, setOpen] = useState(false)
    const [Details, setDetails] = useState()
    console.log(Details, 'detaicfghj');

    const approve = (id) => {
        console.log(id, 'id');
        confirmAlert({
            title: 'Approve Application',
            message: "Are you sure to Approve this Application",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        axios.post('http://localhost:7000/admin/approved/' + id).then((response) => {
                            if (response.status == 200) {
                                setBoolean(!boolean)
                            } else {
                                alert(`Can't approve application,Try Again!`)
                            }

                        })
                    }

                },
                {
                    label: 'No'
                }


            ]
        });

    }

    const reject = (id) => {
        console.log(id, 'rejct');
        confirmAlert({
            title: 'Approve Application',
            message: "Are you sure to Reject this Application",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        axios.post('http://localhost:7000/admin/rejected/' + id).then((response) => {
                            if (response.status == 200) {
                                setBoolean(!boolean)
                            } else {
                                alert(`Can't approve application,Try Again!`)
                            }

                        })
                    }

                },
                {
                    label: 'No'
                }
            ]
        });
    }


    useEffect(() => {
        try {
            axios.get('http://localhost:7000/admin/form').then((response) => {
                console.log(response);
                if (response.data) {
                    const { data } = response
                    setForm(response.data)
                } else {
                    console.log("lololo")
                }

            }).catch((err) => {
                console.log(err, 'oiuytfd');
            })

        } catch (error) {

        }

    }, [boolean])



    const openMODal = (id) => {
        axios.post('http://localhost:7000/admin/bookingModal/' + id).then((response) => {
            console.log(response.data, 'lkjhgfd');
            if (response.status == 200) {
                setDetails(response.data)
                console.log(Details, 'detai');
            } else {
                alert(`Can't approve application,Try Again!`)
            }
        })
        setOpen(true)
    }
    const closeMODal = () => {
        setOpen(false)
    }


    return (
        <>
            <div className="-my-2 py-2  px-5 w-full overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 flex justify-center">
                <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="px-6  py-3 border-b-2 border-gray-300 leading-4 text-blue-500 tracking-wider">S.No</th>
                                <th className="px-6  py-3 border-b-2 border-gray-300 text-sm leading-4 text-blue-500 tracking-wider">Fullname</th>
                                <th className="px-6  py-3 border-b-2 border-gray-300 text-sm leading-4 text-blue-500 tracking-wider">Email</th>
                                <th className="px-6  py-3 border-b-2 border-gray-300 text-sm leading-4 text-blue-500 tracking-wider">Status</th>
                                <th className="px-6  py-3 border-b-2 border-gray-300 text-sm leading-4 text-blue-500 tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {form.map((item, index) => {
                                return (
                                    <tr>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                            <div className="flex items-center">
                                                <div>
                                                    <div className="text-sm leading-5 text-gray-800">{index + 1}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                            <div className="text-md  leading-5 text-blue-900 ">{item.name}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-md leading-5">{item.email}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                            <span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                                                <span aria-hidden className="absolute inset-0 bg-yellow-300 opacity-50 rounded-full"></span>
                                                <span className="relative text-xs">{item.status}</span>
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                            <button type="button" onClick={() => openMODal(item._id)} class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Open</button>
                                            <button type="button" onClick={() => approve(item._id)} class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Approve</button>
                                            <button type="button" onClick={() => reject(item._id)} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Reject</button>
                                        </td>
                                    </tr>

                                )
                            })}
                        </tbody>

                        {/* open modal */}

                        {
                            open ? (
                                <div class="modal fixed flex items-center left-1/3 top-1/3 bg-gray-200 h-max w-max">
                                    <div class="modal-box h-[290px] w-[600px]">
                                        <h3 class="font-bold text-lg underline-offset-8 text-decoration-line: underline">Applicant Details</h3>
                                        <br />
                                        <div className='font-bold'>
                                        <div>Name : {Details && Details.name}</div>
                                        <div>Email : {Details && Details.email}</div>
                                        <div>Phone.No : {Details && Details.phone}</div>
                                        <div>Address : {Details && Details.address}</div>
                                        <div>City : {Details && Details.city}</div>
                                        </div>
                                        <br />
                                        <div class="modal-action">
                                            <button type="button" onClick={closeMODal} class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Close</button>
                                        </div>
                                    </div>
                                </div>


                            ) : null
                        }
                    </table>
                </div>
            </div>



        </>
    )
}

export default Applicants
