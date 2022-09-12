import React, { Component } from "react";
import Chart from "react-apexcharts";

class Linechart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: false
        },
        
        stroke: {
          curve: 'smooth'
        },
        colors:["#4c1d95","#ddd6fe"],
        xaxis: {
          categories: [1, 5, 10, 15, 20, 25,30,35]
        },
        yaxis:{
          categories: [140,180,220,280]
        }
      },
      series: [
        {
          name: "series-1",
          data: [112, 180, 145, 290, 179, 260,270,220 ]
        },
        {
          name: "series-2",
          data: [184, 130, 195, 50, 49, 160,250,265 ]
        },
      ]
    };
  }

  render() {
    return (
      <div >
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="850"
              height="277"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Linechart;