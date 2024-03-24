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
    icon: TbCalendarTime,
    heading: "Academic Year"
  },
  {
    icon: GrArticle,
    heading: "Articles"
  },
  {
    icon: MdOutlineSupervisorAccount,
    heading: "Accounts"
  },
  {
    icon: AiOutlinePieChart,
    heading: "Statistic"
  },
]

export default function Sidebar() {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)
  return (
    <div className='fixed left-0 top-0 w-64 h-full bg-[#0f1941] p-4 pt-14'>
        <div className='flex flex-col tex items-center'>
        {SidebarContent.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        </div>
    </div>
  );
}