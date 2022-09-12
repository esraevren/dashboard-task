import React from "react";
import Chart from "react-apexcharts";

function Donutchart() {
  return (
    <div>
      <Chart
        type="donut"
        width={400}
        height={200}
        series={[3124213 ,1523151, 948213]}
        
        options={{
          labels: ["3,124,213 users", "1,523,151 users", "948,213 users"],
          plotOptions: {
            pie: {
              donut: {
                size:'85%',
                labels: {
                  show: true,
                  total: {
                    show: true,
                    showAlways: true,
                    fontSize: 15,
                  },
                  
                },
                
                
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          fill:{
            colors:["#4c1d95", "#a78bfa", "#ddd6fe"]
          },
         
          colors:["#4c1d95", "#a78bfa", "#ddd6fe"],
          
         
        }}
      ></Chart>
    </div>
  );
}

export default Donutchart;
