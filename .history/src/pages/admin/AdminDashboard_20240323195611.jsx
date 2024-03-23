import React from 'react'
import HeaderDashboard from './HeaderDashboard'
import Sidebar from './Sidebar/index'

const AdminDashboard = () => {
  return (
      <div className='flex flex-col'>
        <HeaderDashboard />
        <div className='mt-10'>
          <Sidebar />
        </div>
      </div>
  )
}

export default AdminDashboard
