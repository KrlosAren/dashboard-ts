import React from "react";
import MenuItem from "./MenuItem";

const LeftSidebar = () => {
  return (
    <div className="main__leftsidebar">
      <div className="menu__container">
        <MenuItem name={"Profile"} />
        <MenuItem name={"Main"} />
        <MenuItem name={"Tools"} />
        <MenuItem name={"Info"} />
        <MenuItem name={"Channels"} />
      </div>
    </div>
  );
};

export default LeftSidebar;
