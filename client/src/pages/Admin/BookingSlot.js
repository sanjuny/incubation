import React from 'react'
import Booking from '../../components/admin/Booking/Booking'
import Sidebar from '../../components/admin/Sidebar/Sidebar'

function BookingSlot() {
  return (
    <div className='flex'>
    <Sidebar />
    <Booking />
    </div>
  )
}

export default BookingSlot
