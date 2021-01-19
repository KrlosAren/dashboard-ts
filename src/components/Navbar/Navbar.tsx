import React from "react";
import Actions from "./Actions";
import AddContact from "./AddContact";
import Profile from "./Profile";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="main__navbar">
      <div className="navbar">
        <div className="navbar__left">
          <div className="left__menu">
            <div>MyApp</div>
            <i className="fas fa-bars"></i>
          </div>
        </div>
        <div className="navbar__center">
          <Search />
          <AddContact />
          <Actions />
        </div>
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
