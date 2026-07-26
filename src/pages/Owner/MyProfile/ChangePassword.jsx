import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import "./MyProfile.css";

const ChangePassword = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="password-card">

      <div className="card-title">
        <Lock size={22} />
        <h3>Change Password</h3>
      </div>

      <div className="password-form">

        <div className="input-group">
          <label>Current Password</label>

          <div className="password-input">
            <input
              type={showCurrent ? "text" : "password"}
              placeholder="Enter Current Password"
            />

            <button
              type="button"
              onClick={() => setShowCurrent(!showCurrent)}
            >
              {showCurrent ? <EyeOff size={18}/> : <Eye size={18}/>}
            </button>

          </div>
        </div>

        <div className="input-group">
          <label>New Password</label>

          <div className="password-input">
            <input
              type={showNew ? "text" : "password"}
              placeholder="Enter New Password"
            />

            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
            >
              {showNew ? <EyeOff size={18}/> : <Eye size={18}/>}
            </button>

          </div>
        </div>

        <div className="input-group">
          <label>Confirm Password</label>

          <div className="password-input">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <EyeOff size={18}/> : <Eye size={18}/>}
            </button>

          </div>
        </div>

        <button 
 className="update-btn"
 onClick={() => alert("Password Updated Successfully")}
>
 Update Password
</button>

      </div>

    </div>
  );
};

export default ChangePassword;