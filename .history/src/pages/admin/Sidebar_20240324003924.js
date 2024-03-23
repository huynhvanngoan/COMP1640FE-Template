import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartPie } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className='fixed left-0 top-0 w-64 h-full bg-[#3d68ff] p-6 pt-14'>
        <div className='flex items-center'>
          <ul>
            <li>
              <Link to="#" className='flex text-white pl-4 space-x-2.5 justify-between text-3xl items-center'>
                <FaChartPie />
                <span>Statistic</span>
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
}
