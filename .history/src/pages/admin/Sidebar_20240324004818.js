import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartPie } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className='fixed left-0 top-0 w-64 h-full bg-[#0f1941] p-4 pt-14'>
        <div className='flex items-center'>
          <ul className='mt-4 border-t'>
            <li>
              <Link to="#" className='flex pl-16 w-full items-center space-x-2 text-white px-4 py-2 text-2xl hover:bg-[#080e24] hover:w-100%'>
                <FaChartPie />
                <span>Statistic</span>
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
}
