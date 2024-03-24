import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import AdminDashboard from './AdminDashboard';


export default function Layout() {
  return (
      <div className='flex flex-col bg-gray-100'>
        <Sidebar />
        <div className='flex flex-col'>
          <Header />
          <AdminDashboard />
        </div>
      </div>
  );
}
