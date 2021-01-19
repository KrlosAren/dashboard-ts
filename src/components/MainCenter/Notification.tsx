import React from "react";
import { Line } from "react-chartjs-2";

const Notification = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#ffffffd0",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#ffffffd0",
        pointBackgroundColor: "#80ffdb",
        pointBorderWidth: 10,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "#ffffffd0",
        pointHoverBorderColor: "#ffffffd0",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const options = { maintainAspectRatio: false };
  return (
    <div className="timeline__notification">
      <div className="notify__header">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/08/Bitcoin-Logo.png"
          alt="icon-notify"
        />
        <h4>Bitcoin</h4>
        <p>date</p>
      </div>
      <div className="notify__chart">
        <Line data={data} options={options} width={50} height={100} />
      </div>
      <div className="notify__stats"></div>
    </div>
  );
};

export default Notification;
