import { LogOut, ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./MyProfile.css";


const Logout = () => {


  const navigate = useNavigate();



  const handleLogout = () => {


    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );


    if(confirmLogout){


      // Remove login data

      localStorage.removeItem("token");
      localStorage.removeItem("user");


      alert("Logged Out Successfully!");



      // Redirect login page

      navigate("/login");


    }


  };




  const handleCancel = () => {

    alert("Logout Cancelled");

  };




  return (

    <div className="logout-card">


      <div className="logout-icon">

        <ShieldAlert size={60} />

      </div>



      <h2>
        Logout
      </h2>



      <p>
        Are you sure you want to logout from your Owner Dashboard?
      </p>




      <div className="logout-buttons">


        <button

        className="cancel-btn"

        onClick={handleCancel}

        >

          Cancel

        </button>





        <button

        className="logout-btn"

        onClick={handleLogout}

        >

          <LogOut size={18}/>

          Logout

        </button>



      </div>


    </div>

  );

};


export default Logout;