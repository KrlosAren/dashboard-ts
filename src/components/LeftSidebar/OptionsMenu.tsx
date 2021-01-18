import React from "react";
import { Settings } from "../../interfaces/index";

const OptionsMenu = ({ setting, icon }: Settings) => {
  return (
    <div className="menu__options">
      <h5>{setting}</h5>
      <i className={icon}></i>
    </div>
  );
};

export default OptionsMenu;
