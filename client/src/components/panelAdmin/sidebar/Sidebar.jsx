import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../../assets/Logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { SidebarData } from "../Data/Data";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  console.log(window.innerWidth);
  return (
    <div>
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>Paranoid Bikes</span>
      </div>
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <NavLink to={item.a}>
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            </NavLink>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
