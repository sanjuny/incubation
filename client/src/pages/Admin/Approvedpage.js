import React from 'react'
import Sidebar from '../../components/admin/Sidebar/Sidebar'
import ApprovedList from '../../components/ApprovedList/ApprovedList'

function Approvedpage() {
  return (
    <div className='flex'>
        <Sidebar />
        <ApprovedList />
    </div>
  )
}

export default Approvedpage