import React, { useState } from "react";
import Chart from "react-apexcharts";

function Barchart() {
  const [state, setState] = useState({
    options : {
        series: [{
        data: [400, ]
      }],
        chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['South Korea'
        ],
      }
      }
  });

  return (
    <div>
      <Chart
        options={state.options}
        series={state.options.series}
        type="bar"
        height={150}
        width={350}
      />
    </div>
  );
}

export default Barchart;