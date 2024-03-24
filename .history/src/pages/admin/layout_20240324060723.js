import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import AdminDashboard from './AdminDashboard';


export default function Layout() {
  return (
      <div className='flex flex-col'>
        <Sidebar />
        <div className='flex ml-44 '>
          <Header />
          <AdminDashboard />
        </div>
      </div>
  );
}
