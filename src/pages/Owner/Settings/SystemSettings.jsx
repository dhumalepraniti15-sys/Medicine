import "./Settings.css";
import { systemSettings } from "./settingsData";
import { Settings, Save } from "lucide-react";

const SystemSettings = () => {
  return (
    <div className="settings-card">

      <div className="settings-header">
        <Settings size={24} />

        <div>
          <h2>System Settings</h2>
          <p>Configure application preferences</p>
        </div>
      </div>

      <div className="settings-grid">

        <div className="form-group">
          <label>Language</label>

          <select defaultValue={systemSettings.language}>
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
          </select>
        </div>

        <div className="form-group">
          <label>Time Zone</label>

          <select defaultValue={systemSettings.timezone}>
            <option>Asia/Kolkata</option>
            <option>Asia/Dubai</option>
            <option>UTC</option>
          </select>
        </div>

        <div className="form-group">
          <label>Currency</label>

          <select defaultValue={systemSettings.currency}>
            <option>INR (₹)</option>
            <option>USD ($)</option>
            <option>EUR (€)</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date Format</label>

          <select defaultValue={systemSettings.dateFormat}>
            <option>DD/MM/YYYY</option>
            <option>MM/DD/YYYY</option>
            <option>YYYY-MM-DD</option>
          </select>
        </div>

        <div className="form-group">
          <label>Theme</label>

          <select defaultValue={systemSettings.theme}>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>

        <div className="form-group">
          <label>Auto Logout</label>

          <select defaultValue={systemSettings.autoLogout}>
            <option>10 Minutes</option>
            <option>20 Minutes</option>
            <option>30 Minutes</option>
            <option>1 Hour</option>
          </select>
        </div>

      </div>

      <button className="save-btn">
        <Save size={18} />
        Save Settings
      </button>

    </div>
  );
};

export default SystemSettings;