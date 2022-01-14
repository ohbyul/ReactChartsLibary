import React from 'react';
import Chart from "react-apexcharts";
//npm install react-apexcharts apexcharts

const LineChartApex = () => {

   const data = {
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Product Trends by Month',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          }
        },
        series: [
          {name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
          },
          {
            name: "aa",
            data: [110, 141, 135, 151, 149, 162, 169, 191, 188]
          }  
        ]
      }

    return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={data.options}
                series={data.series}
                type="line"
                width="800"
              />
            </div>
          </div>
        </div>
      );
};

export default LineChartApex;