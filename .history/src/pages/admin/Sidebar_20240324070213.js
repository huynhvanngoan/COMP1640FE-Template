import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePieChart } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { TbArrowNarrowLeft } from "react-icons/tb";
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
  const [colapse, setColapse] = useState(true);

  return (
    <div className={`left-0 top-0 h-screen bg-[#0f1941] p-4 ${colapse ? "w-64" : "w-20"} duration-300`}>
        <div className='flex flex-col'>
           <div className='relative flex h-10 justify-end'>
            <h1 className='text-white text-3xl font-bold mr'>Admin Site</h1>
            <TbArrowNarrowLeft className={`text-3xl bg-slate-200 rounded-full cursor-pointer absolute -right-7 border border-[#080e24] hover:text-white ${!colapse && 'rotate-180'}`} onClick={() => setColapse(!colapse)} />
           </div>
          <ul className='my-2 border-t pt-4 w-full items-center'>
            {SidebarContent.map((item, index) => {
              return (
                <li className={selected === index  ? "mb-4 group active" : "mb-4" } key={index} onClick={() => setSelected(index)}>
                  <Link to="#" className={`flex w-full rounded-md items-center space-x-2 text-gray-200 hover:bg-[#080e24] hover:text-white group-[.active]:bg-gray-700 group-[.active]:text-white ${colapse ? 'text-xl px-4 py-2 ': 'text-3xl px-2 py-1'}`}>
                    { colapse ? (
                      <>
                        <item.icon />
                        <span>{item.heading}</span>
                      </>
                    ) : ( <item.icon />)
                    }
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
    </div>
  );
}
