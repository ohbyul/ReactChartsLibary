import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
//npm install chartjs-plugin-datalabels --save

const PieChart = () => {

  // Register the plugin to all charts:
  Chart.register(ChartDataLabels);
    const data = {
      plugins: [ChartDataLabels],
      labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
      datasets: [
          {
          label: 'Dataset 1',
          data: [3, 1, 5, 8, 20],
          backgroundColor : ['Red', 'Orange', 'Yellow', 'Green', 'Blue'] ,
          // hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
          // hoverBorderColor: "rgba(234, 236, 244, 1)",
          }
      ]
    };

    const options = {
      cutoutPercentage: 90, //굵기 조절 안먹힘
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart'
        },
        datalabels: {
          display: true,
          formatter: (val, ctx) => {
            return ctx.chart.data.labels[ctx.dataIndex];
          },
          color: '#fff',
          backgroundColor: '#404040'
        },
        doughnutlabel: {
          labels: [{
            text: '550',
            font: {
              size: 20,
              weight: 'bold'
            }
          }, {
            text: 'total'
          }]
        }
      },
    };

    // --------------------------------------------------------
    const data2 = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        data: [50, 60, 70, 180, 190],
        backgroundColor: [ 'rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', ],
      }]
    }

    const options2 = {
      plugins: {
        datalabels: {
          formatter: (value) => {
            return value + '%';
          }
        }
      }
    }

    return (
        <div style={{width : '500px'}}>
             <div className="myChart">
                <Doughnut
                  data={data}
                  options={options}
                />
            </div>
            <div className="myChart2">
                <Doughnut
                  type="doughnut"
                  data={data2}
                  options={options2}
                  plugins={ChartDataLabels}
                />
            </div>
        </div>
    );
};

export default PieChart;