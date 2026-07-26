import React from "react";

import ProfileCard from "./ProfileCard";
import PersonalInformation from "./PersonalInformation";
import ChangePassword from "./ChangePassword";
import Notifications from "./Notifications";
import Logout from "./Logout";

import "./MyProfile.css";


const MyProfile = () => {


  return (

    <div className="profile-page">


      {/* Page Header */}

      <div className="profile-header">

        <h1>
          👤 My Profile
        </h1>

        <p>
          Manage your personal information, password and account settings
        </p>

      </div>




      {/* Profile Section */}

      <div className="profile-layout">


        <div className="left-profile">

          <ProfileCard />

        </div>



        <div className="right-profile">

          <PersonalInformation />

        </div>


      </div>





      {/* Password Section */}

      <div className="profile-section">

        <ChangePassword />

      </div>





      {/* Notification Section */}

      <div className="profile-section">

        <Notifications />

      </div>






      {/* Logout Section */}

      <div className="profile-section">

        <Logout />

      </div>




    </div>

  );

};


export default MyProfile;