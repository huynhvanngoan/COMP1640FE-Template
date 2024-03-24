import React from 'react'
import SideBar from './SideBar'

const AdminDashboard = () => {
  return (
      <div className='flex flex-col'>
        <HeaderDashboard />
        <div className='mt-10'>
          <SideBar />
        </div>
      </div>
  )
}

export default AdminDashboard
