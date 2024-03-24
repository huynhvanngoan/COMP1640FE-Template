import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';


export default function Layout() {
  return (
    <>
      <div className='flex'>
        <Sidebar />
        <div className='flex'>
          <Header />
          
        </div>
      </div>
    </>
  );
}
