import React, { useState, Component } from "react";
import Chart from "react-apexcharts";

function Charts() {
  const [state, setState] = useState({
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      series: [46],
      colors: ["#7e22ce"],

      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "70%",
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
              color: "#111",
              fontSize: "15px",
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
          height={150}
          width={150}
        />
      </div>
    </div>
  );
}

export default Charts;
