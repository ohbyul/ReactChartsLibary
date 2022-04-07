import React from 'react';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const MultiLineChart = () => {

    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
    const data = {
      plugins: [ChartDataLabels],       // 라인 이나 막대에 data 값 출력
      labels: labels,
      datasets: [
        {
            label: '쓰러짐',
            data: [3, 1, 5, 8, 20, 10, 15, 30],
            datalabels:{
                color: 'white',
                backgroundColor : 'purple',
                font:{size:15,weight: 'bold'},
            },
            borderColor:'purple',
            backgroundColor:'purple',
            fill: false,
            pointHoverRadius: 20,
            pointHoverBorderWidth: 3,
            type: "line",
            order: 0,
        },
        {
            label: '평균',
            data: [15, 15, 15, 15, 15, 15, 15, 15],
            borderColor:'black',
            backgroundColor: 'black',
            datalabels: {
                display: false
            }
        }
      ]
    };

    const options = {
          responsive: true,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          stacked: false,
          plugins: {
            title: {
              display: true,
              text: 'Chart.js Line Chart - Multi Axis'
            }
          },
          onClick: function(evt, element) {
            // onClickNot working element null
            console.log(evt, element);
            console.log("click x축 index : ", element[0].index);
            console.log(labels[element[0].index]);
        }
      };

    return (
        <div>
             <div className="myCharts">
                <Line
                    data={data}
                    options={options}
                    plugins = {data.plugins}    // 라인 이나 막대에 data 값 출력
                />
            </div>
        </div>
    );
};

export default MultiLineChart;