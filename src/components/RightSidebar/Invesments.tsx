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
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  const options = {};

  return (
    <div>
      <h2>Investments</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Complete;
