import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

import "./OwnerLayout.css";

const OwnerLayout = () => {

  return (

    <div className="owner-layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="owner-main">

        {/* Top Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="owner-content">

          <Outlet />

        </main>

      </div>

    </div>

  );

};

export default OwnerLayout;