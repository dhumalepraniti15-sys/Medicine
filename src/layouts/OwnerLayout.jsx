import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";

import "./OwnerLayout.css";


const OwnerLayout = () => {


    return (

        <div className="owner-layout">


            {/* Fixed Sidebar */}

            <Sidebar />



            {/* Page Content */}

            <main className="owner-content">

                <Outlet />

            </main>


        </div>

    );


};


export default OwnerLayout;