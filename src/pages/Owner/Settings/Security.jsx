import { useState } from "react";
import { ShieldCheck, Eye, EyeOff, Save } from "lucide-react";
import "./Settings.css";

const Security = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [security, setSecurity] = useState({
    twoFactor: true,
    loginAlerts: true,
    sessionTimeout: "30 Minutes",
  });

  return (
    <div className="settings-card">

      <div className="settings-header">
        <ShieldCheck size={24} />

        <div>
          <h2>Security Settings</h2>
          <p>Manage account security and authentication</p>
        </div>
      </div>

      <div className="settings-grid">

        <div className="form-group full-width">
          <label>Current Password</label>

          <div className="password-field">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Current Password"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

          </div>
        </div>

        <div className="toggle-box">
          <div>
            <h4>Two-Factor Authentication</h4>
            <p>Extra security during login</p>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={security.twoFactor}
              onChange={() =>
                setSecurity({
                  ...security,
                  twoFactor: !security.twoFactor,
                })
              }
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-box">
          <div>
            <h4>Login Alerts</h4>
            <p>Receive alerts for new logins</p>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={security.loginAlerts}
              onChange={() =>
                setSecurity({
                  ...security,
                  loginAlerts: !security.loginAlerts,
                })
              }
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="form-group">
          <label>Session Timeout</label>

          <select
            value={security.sessionTimeout}
            onChange={(e) =>
              setSecurity({
                ...security,
                sessionTimeout: e.target.value,
              })
            }
          >
            <option>15 Minutes</option>
            <option>30 Minutes</option>
            <option>1 Hour</option>
            <option>2 Hours</option>
          </select>
        </div>

      </div>

      <button className="save-btn">
        <Save size={18} />
        Save Security Settings
      </button>

    </div>
  );
};

export default Security;