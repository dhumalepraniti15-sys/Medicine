import "./Settings.css";
import { companyProfile } from "./settingsData";
import { Building2, Upload, Save } from "lucide-react";

const CompanyProfile = () => {
  return (
    <div className="settings-card">

      <div className="settings-header">
        <Building2 size={24} />
        <div>
          <h2>Company Profile</h2>
          <p>Manage pharmacy information</p>
        </div>
      </div>

      <div className="logo-section">

        <img
          src={companyProfile.logo}
          alt="Pharmacy Logo"
          className="company-logo"
        />

        <button className="upload-btn">
          <Upload size={18} />
          Upload Logo
        </button>

      </div>

      <div className="settings-grid">

        <div className="form-group">
          <label>Pharmacy Name</label>
          <input
            type="text"
            defaultValue={companyProfile.pharmacyName}
          />
        </div>

        <div className="form-group">
          <label>Owner Name</label>
          <input
            type="text"
            defaultValue={companyProfile.ownerName}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            defaultValue={companyProfile.email}
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            defaultValue={companyProfile.phone}
          />
        </div>

        <div className="form-group">
          <label>Website</label>
          <input
            type="text"
            defaultValue={companyProfile.website}
          />
        </div>

        <div className="form-group">
          <label>GST Number</label>
          <input
            type="text"
            defaultValue={companyProfile.gstNumber}
          />
        </div>

        <div className="form-group">
          <label>License Number</label>
          <input
            type="text"
            defaultValue={companyProfile.licenseNumber}
          />
        </div>

        <div className="form-group full-width">
          <label>Pharmacy Address</label>

          <textarea
            rows="4"
            defaultValue={companyProfile.address}
          />
        </div>

      </div>

      <button className="save-btn">
        <Save size={18} />
        Save Changes
      </button>

    </div>
  );
};

export default CompanyProfile;