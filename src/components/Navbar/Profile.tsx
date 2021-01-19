import React from "react";

const Profile = () => {
  return (
    <div className="navbar__right">
      <div className="right__user">
        <h4>Jeff Bezos</h4>
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50"
          alt="user img"
        />
        <i className="fas fa-sign-out-alt"></i>
      </div>
    </div>
  );
};

export default Profile;
