import React, { Component } from "react";
import Chart from "react-apexcharts";

class Linechart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1, 5, 10, 15, 20, 25]
        }
      },
      series: [
        {
          name: "series-1",
          data: [142, 180, 45, 50, 49, 60, ]
        }
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
              width="1200"
              height="277"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Linechart;