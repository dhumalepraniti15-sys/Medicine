import { profile } from "./profileData";
import "./MyProfile.css";

const ProfileCard = () => {
  return (
    <div className="profile-card">

      <img
        src={profile.photo}
        alt={profile.name}
        className="profile-image"
      />

      <h2>{profile.name}</h2>

      <p>{profile.role}</p>

      <button 
  className="edit-btn"
  onClick={() => alert("Edit Profile clicked")}
>
   Edit Profile
</button>

    </div>
  );
};

export default ProfileCard;