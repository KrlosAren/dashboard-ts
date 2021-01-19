import React, { useState } from "react";
import OptionsMenu from "./OptionsMenu";
import { Menu } from "../../interfaces/index";

const MenuItem = ({ name }: Menu) => {
  const [options, setOptions] = useState(false);
  const toggleMenu = () => {
    setOptions(!options);
  };

  return (
    <>
      <div className="menu__item">
        <h4>{name}</h4>
        {options ? (
          <i className="fas fa-chevron-up" onClick={toggleMenu}></i>
        ) : (
          <i className="fas fa-chevron-down" onClick={toggleMenu}></i>
        )}
      </div>
      {options && (
        <>
          {/* //TODO arreglar que solo pasemos los children que necesita
              el contenedor
         */}
          <OptionsMenu setting={"Edit profile"} icon={"fas fa-user-edit"} />
          <OptionsMenu setting={"Privacity"} icon={"fas fa-lock"} />
        </>
      )}
    </>
  );
};

export default MenuItem;
