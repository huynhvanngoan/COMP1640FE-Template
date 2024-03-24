import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartPie } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className='fixed left-0 top-0 w-64 h-full bg-[#0f1941] p-6 pt-14'>
        <div className='flex items-center'>
          <ul className=''>
            <li>
              <Link to="#" className='flex text-white pl-5 space-x-2.5 justify-between text-3xl items-center'>
                <FaChartPie />
                <span>Statistic</span>
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
}
