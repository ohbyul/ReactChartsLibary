import React from 'react';
import ReactApexChart from 'react-apexcharts';

const SumMixLineChart = () => {

  const colors =  ['tomato','#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'];
  const data = {
      series: [
        {
          name: '쓰러짐',
          type:'column',
          data: [33, 44, 31, 33, 22, 24,2],
        }, {
          name: '침입',
          type:'column',
          data: [13, 23, 20, 8, 13, 27,3]
        }, {
          name: '배회',
          type:'column',
          data: [11, 17, 15, 15, 21, 14,4]
        }, {
          name: '화재',
          type:'column',
          data: [21, 7, 25, 13, 22, 8,5]
        }, {
          name: '안전모',
          type:'column',
          data: [4, 5, 4, 11, 8, 9,6]
        }, {
          name: '전체',
          type: 'line',
          // color : 'grey',
          // fillColor: '#EB8C87',
          // strokeColor: '#C23829',
          data: [82, 96, 95, 80, 86, 82,20]
        }
      ],
    }

    const options = {
      chart: {
        type: 'line',
        height: 350,
        stacked: true,  //false = 바가 여러개?
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true //오른쪽 상단 줌 및 삭제
        }
      },
      title: {
        text: 'Traffic Sources'
      },
      dataLabels: {
        enabled: true,  //라인에 숫자
        // enabledOnSeries: [0,1,2,3,4,5],
        enabledOnSeries: [5],
        background: {
          enabled: true,
        },
      },
      // events: {
      //   dataPointSelection: function (e, chart, opts) {
      //     //
      //   }
      // },
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
          horizontal: false,  //true하면 가로 막대됨 
          borderRadius: 10,
          columnWidth: '50%'
        },
        line: {
          
        }
      },
      theme: {
          mode: 'light', 
          palette: 'palette2', 
      },
      labels:  ['01/01', '01/02', '01/03', '01/04', '01/05', '01/06', '01/07'],
      xaxis: {
        type: 'date', //datetime 있음
      },
      yaxis: {
        title: {
          text: 'Points',
          style: {
            color: 'red', //y축 색상
          }
        },
        min: 0,
        max: 100  //이걸 넣어야 y푹이 맞음 max 값으로 가져와야할듯
      },
      legend: {
        position: 'bottom',
        offsetY: 5
      },
      fill: {
        opacity: 1
      }
    }

    return (
        <div>
            <div id="chart">
                <ReactApexChart 
                    options={options}
                    series={data.series}
                    type="line"
                    width="900"
                 />
            </div>
        </div>
    );
};

export default SumMixLineChart;