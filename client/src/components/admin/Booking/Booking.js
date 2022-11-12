import React from 'react'
import { MdAddCircleOutline } from 'react-icons/md'



function Booking() {

    return (
        <>
            <div className='w-full h-screen flex justify-center items-center  '>
                <div className='w-11/12 h-5/6 '>

                    <div className='h-28 w-full flex justify-between rounded-t-2xl'>
                        <h1 className='mt-5 px-5 font-bold text-2xl underline-offset-8 text-decoration-line: underline'>Booking Slots</h1>
                        <button className='w-max h-max mt-5 mr-5 rounded-2xl bg-cyan-500 shadow-lg shadow-cyan-500/50'>
                            <h4 className='px-3 py-1 text-base text-white flex items-center gap-2'><MdAddCircleOutline /><span>Add solts</span></h4>
                        </button>
                    </div>

                    <div>
                        <div className=' w-full  rounded-b-2xl  p-5 gap-3 grid grid-cols-3'>
                            <div className='h-36 w-72 bg-blue-400 rounded-2xl flex justify-center items-center shadow-2xl'>
                                wertyuijok
                            </div>
                            <div className='h-36 w-72 bg-red-400 rounded-2xl flex justify-center items-center shadow-2xl'>
                                sdfghjk
                            </div>
                            <div className='h-36 w-72 bg-red-400 rounded-2xl flex justify-center items-center  shadow-2xl '>
                                fghj
                            </div>
                            <div className='h-36 w-72 bg-red-400 rounded-2xl flex justify-center items-center  shadow-2xl'>
                                yuhiop
                            </div>
                            <div className='h-36 w-72 bg-blue-400 rounded-2xl flex justify-center items-center  shadow-2xl'>
                                ertyui
                            </div>
                            <div className='h-36 w-72 bg-blue-400 rounded-2xl flex justify-center items-center  shadow-2xl'>
                                ertyui
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Booking
