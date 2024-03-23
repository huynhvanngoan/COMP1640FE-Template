import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartPie } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className='fixed left-0 top-0 w-64 h-full bg-gray-300 border-2 p-6 pt-14'>
        <div className='flex items-center'>
          <ul>
            <li>
              <Link to="#" className='flex text-black space-x-5 justify-between text-2xl align-text-top'>
                <FaChartPie className='top-2 text-3xl'/>
                <span>Statistic</span>
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
}
