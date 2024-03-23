import React from 'react'
import HeaderDashboard from './HeaderDashboard.tsx'
import {Sidebar} from './Sidebar/index.tsx'
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
