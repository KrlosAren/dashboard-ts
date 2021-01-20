import { Line } from "react-chartjs-2";
import crytoData from "../../currencyData.json";
import moment from "moment";

const Notification = () => {
  const label = crytoData[0].crypto;
  const labels = crytoData[0].dataset.map((label) => label.year);
  const annualPrice = crytoData[0].dataset.map((data) => data.price);

  const data = {
    labels: labels.reverse(),
    datasets: [
      {
        label: label,
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
        data: annualPrice.reverse(),
      },
    ],
  };

  const options = {
    legend: {
      labels: {
        fontColor: "#ffffffd0",
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };
  return (
    <div className="timeline__notification">
      <div className="notify__header">
        <img src={crytoData[0].img} alt="icon-notify" />
        <h4>{label}</h4>
        <p>{moment(crytoData[0].updated_at).fromNow()}</p>
      </div>
      <div className="notify__chart">
        <Line data={data} options={options} />
      </div>
      <div className="notify__stats"></div>
    </div>
  );
};

export default Notification;
