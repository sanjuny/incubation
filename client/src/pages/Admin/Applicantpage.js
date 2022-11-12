import  Sidebar  from '../../components/admin/Sidebar/Sidebar'
import React from 'react'
import Applicants from '../../components/admin/Applicants/Applicants'

function Applicantpage() {
  return (
    <div className='flex'>
      <Sidebar />
      <Applicants />
    </div>
  )
}

export default Applicantpage
