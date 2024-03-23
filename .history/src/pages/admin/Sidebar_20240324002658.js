import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartPie } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className='fixed left-0 top-0 w-64 h-full bg-gray-900 p-6 pt-14'>
        <div className='flex items-center'>
          <ul>
            <li>
              <Link to="#">
                <FaChartPie />
                <span></span>
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
}
