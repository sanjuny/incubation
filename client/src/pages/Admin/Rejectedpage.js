import React from 'react'
import Sidebar from '../../components/admin/Sidebar/Sidebar'
import RejectedList from '../../components/RejectedList/RejectedList'

function Rejectedpage() {
  return (
    <div className='flex'>
      <Sidebar /> 
      <RejectedList />
    </div>
  )
}

export default Rejectedpage