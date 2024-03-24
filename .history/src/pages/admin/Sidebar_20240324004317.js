import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartPie } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className='fixed left-0 top-0 w-64 h-full bg-[#0f1941] p-6 pt-14'>
        <div className='flex items-center'>
          <ul className='mt-4'>
            <li>
              <Link to="#" className='flex text-white pl-5 space-x-2.5 text-3xl hover:bg-[#080e24] hover:w-100%'>
                <FaChartPie className='top-3' />
                <span>Statistic</span>
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
}
