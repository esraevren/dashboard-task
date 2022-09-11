import React, {useState, Component} from 'react'
import Chart from "react-apexcharts";

function Charts() {
    const [state, setState]= useState( {

        options: {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            series: [46],
            
            dataLabels: {
                value: {
                    offsetY:-10,
                    color: "#111",
                    fontSize: "30px",
                    show: true
                  }
            },
            labels: [''],
        }
      })
   
  return (
    <div>
        <Chart options={state.options} series={state.options.series} type="radialBar" height={150} width={150} dataLabels={state.options.dataLabels} />
    </div>
  )
}

export default Charts