import React, { useState } from "react";
import Chart from "react-apexcharts";

function Charts() {
  const [state, setState] = useState({
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      series: [46],
      colors: ["#5b21b6"],

      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "50%",
          },

          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -10,
              show: true,
              color: "#7e22ce",
              fontSize: "13px",
            },
            value: {
              offsetY: -10,
              color: "#1e293b",
              fontSize: "13px",
              fontFamily: "Poppins",
              fontWeight: "bold",
              show: true,
            },
          },
        },
      },

      labels: [""],
    },
  });

  return (
    <div>
      <div>
        <Chart
          options={state.options}
          series={state.options.series}
          type="radialBar"
          height={130}
          width={70}
        />
      </div>
    </div>
  );
}

export default Charts;
