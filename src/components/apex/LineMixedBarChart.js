import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineMixedBarChart = () => {
    const data = {
        series: [{
          name: 'Bar c',
          type: 'column',
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
          name: 'Line c',
          type: 'line',
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
          },
          stroke: {
            width: [0, 4]
          },
          title: {
            text: 'Traffic Sources'
          },
          dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
          },
          labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
          xaxis: {
            type: 'datetime'
          },
          yaxis: [{
            title: {
              text: 'Bar c',
              // color:'red'
            },
          
          }, {
            opposite: true,
            title: {
              text: 'Line c',
              // color: 'blue'
            }
          }]
        },
      }

    return (
        <div>
            <div id="chart">
                <ReactApexChart 
                    options={data.options}
                    series={data.series}
                    type="line" 
                    width="870"
                 />
            </div>
        </div>
    );
};

export default LineMixedBarChart;