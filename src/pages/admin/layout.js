import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import AdminDashboard from './AdminDashboard';

export default function Layout() {
  const [selected, setSelected] = useState(0);

  return (
    <div className='container max-w-full max-h-full  flex flex-row bg-gray-200'>
      <Sidebar selected={selected} setSelected={setSelected}/>
      <div className='flex flex-col  container max-w-full '>
        <Header />
        <div className='overflow-auto flex-grow'>
          <AdminDashboard selected={selected} />
        </div>
      </div>
    </div>
  );
}