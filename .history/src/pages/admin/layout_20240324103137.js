import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import AdminDashboard from './AdminDashboard';


export default function Layout() {
  return (
      <div className='container max-w-full over flex flex-row bg-gray-100'>
        <Sidebar />
        <div className='flex flex-col w-full'>
          <Header />
          <AdminDashboard />
        </div>
      </div>
  );
}