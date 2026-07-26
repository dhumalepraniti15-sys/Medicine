import { profile } from "./profileData";
import "./MyProfile.css";

const PersonalInformation = () => {
  return (
    <div className="info-card">

      <h3>Personal Information</h3>

      <div className="info-grid">

        <div>
          <label>Full Name</label>
          <input value={profile.name} readOnly />
        </div>

        <div>
          <label>Email</label>
          <input value={profile.email} readOnly />
        </div>

        <div>
          <label>Phone</label>
          <input value={profile.phone} readOnly />
        </div>

        <div>
          <label>Address</label>
          <input value={profile.address} readOnly />
        </div>

      </div>

    </div>
  );
};

export default PersonalInformation;