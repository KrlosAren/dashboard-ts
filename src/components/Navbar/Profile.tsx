import { useContext } from "react";

import AppContext from "../../context/AppContext";

const Profile = () => {
  const { state } = useContext(AppContext);
  const { profile } = state;

  return (
    <div className="navbar__right">
      <div className="right__user">
        <h4>{profile.name}</h4>
        <img src={profile.img} alt="user img" />
        <i className="fas fa-sign-out-alt"></i>
      </div>
    </div>
  );
};

export default Profile;
