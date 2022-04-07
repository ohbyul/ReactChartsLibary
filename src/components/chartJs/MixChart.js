import React from 'react';
import { Bar } from 'react-chartjs-2';
//npm install chartjs-plugin-datalabels --save
import ChartDataLabels from 'chartjs-plugin-datalabels';

const MixChart = () => {

    const data1 = [3, 1, 5, 8, 20, 10, 15, 30];
    const data2 = [4, 32, 10, 5, 5, 9, 10, 10];
    const data3 = [5, 9, 10, 5, 5, 9, 10, 10];
    const data4 = [7, 5, 10, 5, 5, 9, 10, 10];
    const data5 = [14, 3, 10, 5, 5, 9, 10, 10];
    const total = data1.map((num, idx) => 
                        num + data2[idx]+ data3[idx] 
                        + data4[idx] +data5[idx]
                    );
    const dataFont = { color: 'white', font:{size:12}}
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

    const data = {
        plugins: [ChartDataLabels],
        labels: labels,
        datasets: [
            {
                label: "쓰러짐",
                data: data1,
                datalabels: dataFont,
                backgroundColor: "rgb(0, 143, 251)",
                borderColor: "rgba(0, 143, 251, 0.6)",
                order: 1,
            },
            {
                label: "침입",
                data: data2,
                datalabels: dataFont,
                backgroundColor: "rgb(0, 227, 150)",
                borderColor: "rgba(0, 227, 150, 0.6)",
                order: 1,
            },
            {
                label: "배회",
                data: data3,
                datalabels: dataFont,
                backgroundColor: "rgb(254, 176, 25)",
                borderColor: "rgba(254, 176, 25, 0.6)",
                order: 1,
            },
            {
                label: "화재",
                data: data4,
                datalabels: dataFont,
                backgroundColor: "rgb(255, 69, 96)",
                borderColor: "rgba(255, 69, 96, 0.6)",
                order: 1,
            },
            {
                label: "안전모",
                data: data5,
                datalabels: dataFont,
                backgroundColor: "rgb(119, 93, 208)",
                borderColor: "rgba(119, 93, 208, 0.6)",
                order: 1,
            },
            {
                label: "전체",
                data: total,
                datalabels:{
                    color: 'white',
                    backgroundColor : 'black',
                    font:{size:15,weight: 'bold'},
                },
                backgroundColor: "black",
                borderColor: "black",
                fill: false,
                pointHoverRadius: 20,
                pointHoverBorderWidth: 5,
                type: "line",
                order: 0,
            },
        ],
      };

      const options = {
        interaction: {
            mode: 'index',  //툴팁 전체 출력
            intersect: false,
        },
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: "Bar + Line Chart",
                fontSize: 25,
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true,
                // beginAtZero: true
            }
        },
        onClick: function(evt, element) {
            // onClickNot working element null
            console.log(evt, element);
        }
    };



    return (
        <div>
             <div className="charts-card">
                <Bar
                data={data}
                options={options}
                plugins = {data.plugins}
                />
            </div>
        </div>
    );
};

export default MixChart;