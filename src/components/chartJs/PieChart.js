import React from 'react';
import { Pie } from 'react-chartjs-2';


const PieChart = () => {
    const DATA_COUNT = 5;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

    const data = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
        {
        label: 'Dataset 1',
        data: [3, 1, 5, 8, 20, 10, 15, 30],
        // backgroundColor: Object.values(Utils.CHART_COLORS),
        }
    ]
    };

    const options = {
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

    return (
        <div>
             <div className="myChart">
                <Pie
                data={data}
                options={options}
                />
            </div>
        </div>
    );
};

export default PieChart;