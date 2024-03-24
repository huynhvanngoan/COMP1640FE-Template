import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePieChart } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";
import { GrArticle } from "react-icons/gr";
import { MdOutlineSupervisorAccount } from "react-icons/md";

export const SidebarContent = [
  {
    icon: AiOutlinePieChart,
    heading: "Statistic"
  },
  {
    icon: AiOutlinePieChart,
    heading: "Statistic"
  },
  {
    icon: AiOutlinePieChart,
    heading: "Statistic"
  },
  {
    icon: AiOutlinePieChart,
    heading: "Statistic"
  },
  {
    icon: AiOutlinePieChart,
    heading: "Statistic"
  },
]

export default function Sidebar() {
  const [selected, setSelected] = useState(0);
  return (
    <div className='fixed left-0 top-0 w-64 h-full bg-[#0f1941] p-4 pt-14'>
        <div className='flex items-center'>
          <ul className='my-4  border-t pt-4 w-full'>
            {SidebarContent.map((item, index) => {
              return (
                <li className={selected === index  ? }>

                </li>
              )
            })}
            <li className='mb-4 group active' >
              <Link to="#" className='flex w-full rounded-md items-center space-x-2 text-gray-200 px-4 py-2 text-xl hover:bg-[#080e24] hover:text-white group-[.active]:bg-gray-700 group-[.active]:text-white'>
                <AiOutlinePieChart  />
                <span>Statistic</span>
              </Link>
            </li>
            <li className='mb-4'>
              <Link to="#" className='flex w-full rounded-md items-center space-x-2 text-gray-200 px-4 py-2 text-xl hover:bg-[#080e24] hover:text-white '>
                <TbCalendarTime  />
                <span>Academic Year</span>
              </Link>
            </li>
            <li className='mb-4'>
              <Link to="#" className='flex w-full rounded-md items-center space-x-2 text-gray-200 px-4 py-2 text-xl hover:bg-[#080e24] hover:text-white'>
                <GrArticle  />
                <span>Articles</span>
              </Link>
            </li>
            <li className='mb-4'>
              <Link to="#" className='flex w-full rounded-md items-center space-x-2 text-gray-200 px-4 py-2 text-xl hover:bg-[#080e24] hover:text-white'>
                <MdOutlineSupervisorAccount />
                <span>Accounts</span>
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
}
