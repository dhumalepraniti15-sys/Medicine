import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const location = useLocation();

  const navMenus = {

    "/financial-ledger": [
      { name: "Income Ledger", path: "/financial-ledger/income" },
      { name: "Expense Ledger", path: "/financial-ledger/expense" },
      { name: "Cash Flow", path: "/financial-ledger/cash-flow" },
      { name: "General Ledger", path: "/financial-ledger/general" },
      { name: "Profit & Loss", path: "/financial-ledger/profit-loss" }
    ],

    "/reports": [
      { name: "Revenue Reports", path: "/reports/revenue" },
      { name: "Expense Reports", path: "/reports/expense" },
      { name: "Pharmacy Reports", path: "/reports/pharmacy" },
      { name: "Vendor Reports", path: "/reports/vendor" },
      { name: "Procurement Reports", path: "/reports/procurement" },
      { name: "Financial Reports", path: "/reports/financial" }
    ],

    "/payroll": [
      { name: "Payroll", path: "/payroll" },
      { name: "Employee Salary", path: "/payroll/employee-salary" },
      { name: "Payslips", path: "/payroll/payslips" },
      { name: "Deductions", path: "/payroll/deductions" },
      { name: "Bonus", path: "/payroll/bonus" },
      { name: "Salary Reports", path: "/payroll/salary-reports" }
    ],

    "/settings": [
      { name: "Company Profile", path: "/settings/company" },
      { name: "System Settings", path: "/settings/system" },
      { name: "Security", path: "/settings/security" },
      { name: "Roles & Permissions", path: "/settings/roles" },
      { name: "Backup", path: "/settings/backup" }
    ],

    "/my-profile": [
      { name: "Profile", path: "/my-profile" }
    ]

  };

  const currentMenu =
    Object.keys(navMenus).find((key) =>
      location.pathname.startsWith(key)
    );

  const menuItems = navMenus[currentMenu] || [];

  return (

    <div className="top-navbar">

      {menuItems.map((item, index) => (

        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            isActive ? "nav-active" : ""
          }
        >
          {item.name}
        </NavLink>

      ))}

    </div>

  );

};

export default Navbar;