import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import AdminDashboard from './AdminDashboard';


export default function Layout() {
  return (
      <div className='flex flex-row bg-gray-100'>
        <Sidebar />
        <div className='flex flex-colc con'>
          <Header />
          <AdminDashboard />
        </div>
      </div>
  );
}
