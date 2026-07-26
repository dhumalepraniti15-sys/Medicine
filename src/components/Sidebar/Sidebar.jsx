import React from "react";
import { NavLink } from "react-router-dom";

import {
  Wallet,
  BarChart3,
  IndianRupee,
  Settings,
  User
} from "lucide-react";

import "./Sidebar.css";

const Sidebar = () => {

  const menu = [

    {
      name: "Financial Ledger",
      path: "/financial-ledger",
      icon: <Wallet />
    },

    {
      name: "Reports & Analytics",
      path: "/reports",
      icon: <BarChart3 />
    },

    {
      name: "Payroll",
      path: "/payroll",
      icon: <IndianRupee />
    },

    {
      name: "Settings",
      path: "/settings",
      icon: <Settings />
    },

    {
      name: "My Profile",
      path: "/my-profile",
      icon: <User />
    }

  ];

  return (

    <div className="sidebar">

      <div className="sidebar-logo">

        <h2>
          🏥 MediCare ERP
        </h2>

        <p>
          Owner Dashboard
        </p>

      </div>

      <div className="sidebar-menu">

        {

          menu.map((item, index) => (

            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) => isActive ? "active" : ""}
            >

              <span className="menu-icon">
                {item.icon}
              </span>

              <span>
                {item.name}
              </span>

            </NavLink>

          ))

        }

      </div>

    </div>

  );

};

export default Sidebar;