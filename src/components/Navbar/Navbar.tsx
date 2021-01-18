import React from "react";

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
          <div className="center__search">
            <i className="fas fa-filter"></i>
            <input
              type="text"
              name="search"
              placeholder="Search for something"
            />
            <button type="submit">
              <i className="fas fa-search"></i>
              <span>Search</span>
            </button>
          </div>
          <div className="center__contact">
            <i className="fas fa-plus"></i>
            <span>Add Contact</span>
          </div>
          <div className="center__icons">
            <i className="fas fa-user-plus"></i>
            <i className="far fa-envelope"></i>
            <div className="notification">
              <i className="far fa-bell"></i>
            </div>
          </div>
        </div>
        <div className="navbar__right">
          <div className="right__user">
            <h4>Jeff Bezos</h4>
            <img
              src="https://dummyimage.com/600x600/ebd3eb/fff"
              alt="user img"
            />
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
