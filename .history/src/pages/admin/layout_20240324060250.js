import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import AdminDashboard from './AdminDashboard';


export default function Layout() {
  return (
      <div className='flex'>
        <Sidebar />
        <div className='flex ml-12'>
          <Header />
          <AdminDashboard />
        </div>
      </div>
  );
}
