import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePieChart } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

export const SidebarContent = [
  {
    icon: AiOutlinePieChart,
    heading: "Statistic"
  },
  {
    icon: TbCalendarTime,
    heading: "Academic Year"
  },
  {
    icon: LiaSwatchbookSolid,
    heading: "Articles"
  },
  {
    icon: MdOutlineSupervisorAccount,
    heading: "Accounts"
  }
]

export default function Sidebar() {
  const [selected, setSelected] = useState(0);

  return (
    <div className='left-0 top-0 w-64 h-screen bg-[#0f1941] p-4'>
        <div className='flex flex-col'>
           <div className='flex h-10 justify-end text-2xl'>
            <HiMiniBars3BottomLeft />
           </div>
          <ul className='my-2 border-t pt-4 w-full items-center'>
            {SidebarContent.map((item, index) => {
              return (
                <li className={selected === index  ? "mb-4 group active" : "mb-4" } key={index} onClick={() => setSelected(index)}>
                  <Link to="#" className='flex w-full rounded-md items-center space-x-2 text-gray-200 px-4 py-2 text-xl hover:bg-[#080e24] hover:text-white group-[.active]:bg-gray-700 group-[.active]:text-white'>
                    <item.icon />
                    <span>{item.heading}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
    </div>
  );
}
