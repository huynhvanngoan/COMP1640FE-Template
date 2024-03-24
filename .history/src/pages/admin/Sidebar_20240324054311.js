import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePieChart } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";
import { GrArticle } from "react-icons/gr";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { motion } from "framer-motion";
import { HiBars3BottomRight } from "react-icons/hi2";
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
  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
      <HiBars3BottomRight />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
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
        {/* signoutIcon */}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </motion.div>
    </>
  );
};
  );
}
