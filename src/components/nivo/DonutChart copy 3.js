import React from 'react';
//npm install chart.js
import Chart from 'chart.js/auto';

const DonutChart = () => {
 
  const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart'
        }
      }
    },
  };

  const DATA_COUNT = 5;
  const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
  
  const data = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'Dataset 1',
        data: Number(NUMBER_CFG),
        backgroundColor: Object.values(['Red', 'Orange', 'Yellow', 'Green', 'Blue']),
      }
    ]
  };

    return (
        <div>
            <labal>이벤트2</labal>
            <div>
              <canvas id="myChart" width="400" height="400"></canvas> 
            </div>
        </div>
    );
};
export default DonutChart;