import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartPie } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className='fixed left-0 top-0 w-64 h-full bg-[#0f1941] p-4 pt-14'>
        <div className='flex items-center'>
          <ul className='my-4  border-t pt-4 w-full'>
            <li className='mb-4'>
              <Link to="#" className='flex w-full rounded-md items-center space-x-2 text-gray-200 px-4 py-2 text-xl hover:bg-[#080e24] hover:text-white'>
                <FaChartPie />
                <span>Statistic</span>
              </Link>
            </li>
            <li className='mb-4'>
              <Link to="#" className='flex w-full rounded-md items-center space-x-2 text-gray-100 px-4 py-2 text-xl hover:bg-[#080e24] hover:text-white'>
                <FaChartPie />
                <span>Statistic</span>
              </Link>
            </li>
            <li className='mb-4'>
              <Link to="#" className='flex w-full rounded-md items-center space-x-2 text-gray-100 px-4 py-2 text-xl hover:bg-[#080e24] hover:text-white'>
                <FaChartPie />
                <span>Statistic</span>
              </Link>
            </li>
            <li className='mb-4'>
              <Link to="#" className='flex w-full rounded-md items-center space-x-2 text-gray-100 px-4 py-2 text-xl hover:bg-[#080e24] hover:text-white'>
                <FaChartPie />
                <span>Statistic</span>
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
}
