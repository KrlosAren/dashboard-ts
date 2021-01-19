import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const Founds = () => {
  const { state } = useContext(AppContext);
  const { money } = state;

  return (
    <div className="founds">
      <p>$ {money[0].amount}</p>
      <button type="submit">Add Founds</button>
    </div>
  );
};

export default Founds;
