import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const Founds = () => {
  const { state } = useContext(AppContext);
  const { money } = state;

  const balance = money[0].amount.reduce(
    (total: number, cv: number) => total + cv
  );

  return (
    <div className="founds">
      <p>$ {balance}</p>
      <button type="submit">Add Founds</button>
    </div>
  );
};

export default Founds;
