import React, { useEffect, useState } from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

function Sidebar() {
const navigate=useNavigate()

useEffect(()=>{
    const token = localStorage.getItem('AdminToken')
    if(!token){
        navigate('/adminlogin')
    }
})

const Logout = ()=>{

    localStorage.removeItem('AdminToken')
    navigate('/adminlogin')
}


    const menus = [
        { name: "Applicant List", link: '/applicants', icon: AiOutlineUsergroupAdd },
        { name: "Approved List", link: '/approved', icon: AiOutlineFileDone },
        { name: "Rejected List", link: '/reject', icon: MdCancel },
        { name: "Booking Slots", link: '/booking', icon: FaBook},
    ];

    const [open, setOpen] = useState(true);
    return (
        <section className={`flex gap-6 ${open ? 'w-72' : 'w-16'}`}>
            <div className={`bg-[#0e0e0e] min-h-screen fixed ${open ? 'w-72' : 'w-16'}
            duration-500 text-gray-100 px-4`}>

                <div className='py-3 flex justify-end'>
                    <HiMenuAlt2
                        size={26} className="cursor-pointer"
                        onClick={() => setOpen(!open)} />
                </div>

                <div className='mt-4 flex flex-col gap-4 relative'>
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu?.link}
                            key={i}
                            className={` ${menu?.margin && "mt-5"
                                } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 
                             rounded-md`}>

                            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                            <h2
                                style={{
                                    transitionDelay: `${i + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                    } `}>
                                {menu?.name}
                            </h2>
                            <h2
                                className={`${open && "hidden"
                                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 
                                rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 
                                group-hover:py-1 group-hover:left-14 group-hover:duration-300 
                                group-hover:w-fit`}>
                                {menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>
                <button class="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full mt-5 mr-14" onClick={Logout}>
               LogOut
              </button>
            </div>

        </section>

    )
}

export default Sidebar
