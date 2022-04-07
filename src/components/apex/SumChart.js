import React from 'react';
import ReactApexChart from 'react-apexcharts';

const SumChart = () => {
    const data = {
        series: [{
          name: '쓰러짐',
          data: [33, 44, 31, 33, 22, 24]
        }, {
          name: '침입',
          data: [13, 23, 20, 8, 13, 27]
        }, {
          name: '배회',
          data: [11, 17, 15, 15, 21, 14]
        }, {
          name: '화재',
          data: [21, 7, 25, 13, 22, 8]
        }, {
          name: '안전모',
          data: [4, 5, 4, 11, 8, 9]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
              show: true
            },
            zoom: {
              enabled: true
            }
          },
          title: {
            text: 'Traffic Sources'
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 10
            },
          },
          xaxis: {
            type: 'datetime',
            categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
              '01/05/2011 GMT', '01/06/2011 GMT'
            ],
          },
          legend: {
            position: 'bottom',
            offsetY: 5
          },
          fill: {
            opacity: 1
          }
        },
      }

    return (
        <div>
            <div id="chart">
                <ReactApexChart 
                    options={data.options}
                    series={data.series}
                    type="bar"
                    width="900"
                 />
            </div>
        </div>
    );
};

export default SumChart;