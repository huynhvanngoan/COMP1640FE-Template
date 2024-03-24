import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import AdminDashboard from './AdminDashboard';


export default function Layout() {
  return (
      <div className='container max-w-full max-h-full overflow-x-hidden flex flex-row bg-gray-100'>
        <Sidebar />
        <div className='flex flex-col container max-w-full max-h-full'>
          <Header />
          <AdminDashboard />
        </div>
      </div>
  );
}
