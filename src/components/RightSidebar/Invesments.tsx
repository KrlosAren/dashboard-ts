import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import AppContext from "../../context/AppContext";
import { MoneyProps } from "../../interfaces";

const Complete = () => {
  const { state } = useContext(AppContext);
  const { invesments } = state;

  const currency = invesments.map((i: MoneyProps) => i.currency);
  const amount = invesments.map((i: MoneyProps) => i.amount);

  const data = {
    labels: currency,
    datasets: [
      {
        data: amount,
        backgroundColor: ["#ff577f", "#51c2d5", "#ffc764"],
        hoverBackgroundColor: ["#ff577f", "#51c2d5", "#ffc764"],
      },
    ],
  };

  const options = {
    legend: {
      labels: {
        fontColor: "#fffffff5",
      },
    },
  };

  return (
    <div className="investements">
      <h2>Investments</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Complete;
