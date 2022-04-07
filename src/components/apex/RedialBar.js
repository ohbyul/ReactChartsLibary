import React from 'react';
import ReactApexChart from 'react-apexcharts';

const RedialBar = () => {
    const data = { 
        series: [67],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 15,
                size: '70%',
                image: '../../css/images/a-icon.jpg',
                imageWidth: 64,
                imageHeight: 64,
                imageClipped: false
              },
              dataLabels: {
                name: {
                  show: false,
                  color: '#fff'
                },
                value: {
                  show: true,
                  color: '#333',
                  offsetY: 70,
                  fontSize: '22px'
                }
              }
            }
          },
          fill: {
            type: 'image',
            image: {
              src: ['../../css/images/pattern.jpg'],
            }
          },
          stroke: {
            lineCap: 'round'
          },
          labels: ['Volatility'],
        },
      };

    return (
        <div>
            <div id="chart">
              <ReactApexChart  
                options={data.options}
                series={data.series}
                type="radialBar"
                width="500"
              />
            </div>
        </div>
    );
};

export default RedialBar;