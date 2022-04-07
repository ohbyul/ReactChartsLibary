import React from 'react';
import ReactApexChart from "react-apexcharts";
//npm install react-apexcharts apexcharts


const DonutChart = () => {
 
  const data = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      legend: {
        position: 'bottom'
      },
      responsive: [{
        breakpoint: 480,
      }],
      plotOptions: {
        pie: {
          donut: {
            // hollow: {
            //   margin: 15,
            //   size: '70%',
            //   image: '../../css/images/a-icon.jpg',
            //   imageWidth: 64,
            //   imageHeight: 64,
            //   imageClipped: false
            // },
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true,
                label: 'ALARM',
                fontSize: '12px',
                color: 'red'
              },
              value: {
                fontSize: '22px',
                show: true,
                color: 'blue',
              },
            },
          }
        }
      },
      labels: ["침입", "배회", "쓰러짐", "화재", "안전모"],
      title: {
        text: 'title write range',
        align: 'left'
      },
    },
  }


    return (
        <div>
            <labal>이벤트2</labal>
            <div id="chart">
              <ReactApexChart 
                options={data.options}
                series={data.series}
                type="donut" 
                width="500"
              />
            </div>
        </div>
    );
};
export default DonutChart;