import React from 'react';
import { CChart } from '@coreui/react-chartjs'

import './lineChart.css'

const LineChart = () => {
  console.log('라인 차트');
    const data = {
        labels: ["6:00", "7:00", "8:00", "9:00"," 10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
        datasets: [
            {
                label: "메뉴얼",
                backgroundColor: "rgba(28, 197, 238, 1)",
                borderColor: "rgba(28, 197, 238, 1)",
                pointBackgroundColor: "rgba(28, 197, 238, 1)",
                pointBorderColor: "#fff",
                data: [100, 200, 120, 390, 310, 400, 390, 280, 240, 300, 240, 220, 300, 320, 280, 240, 250, 110],
                yAxisID: 'y'
            },
            {
                label: "바이오",
                backgroundColor: "rgba(76, 231, 191, 1)",
                borderColor: "rgba(76, 231, 191, 1)",
                pointBackgroundColor: "rgba(76, 231, 191, 1)",
                pointBorderColor: "#fff",
                data: [120, 220, 220, 330, 210, 300, 190, 280, 220, 200, 140, 140, 100, 120, 180, 140, 150, 100],
                yAxisID: 'y1'
            },
        ],
    }

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
            text: '시간별 대기열 분석'
          }
        },
        // scales: {
        //   y: {
        //     type: 'linear',
        //     display: true,
        //     position: 'left',
        //   },
        //   y1: {
        //     type: 'linear',
        //     display: true,
        //     position: 'right',
    
        //     // grid line settings
        //     grid: {
        //       drawOnChartArea: false, // only want the grid lines for one axis to show up
        //     },
        //   },
        // }
      }
      console.log(options);

    //   const actions = [
    //     {
    //       name: 'Randomize',
    //       handler(chart) {
    //         chart.data.datasets.forEach(dataset => {
    //           dataset.data = numbers({count: chart.data.labels.length, min: -100, max: 100});
    //         });
    //         chart.update();
    //       }
    //     },
    //   ];
    //   console.log(actions);

    // function numbers(config) {
    //   var cfg = config || {};
    //   var min = valueOrDefault(cfg.min, 0);
    //   var max = valueOrDefault(cfg.max, 100);
    //   var from = valueOrDefault(cfg.from, []);
    //   var count = valueOrDefault(cfg.count, 8);
    //   var decimals = valueOrDefault(cfg.decimals, 8);
    //   var continuity = valueOrDefault(cfg.continuity, 1);
    //   var dfactor = Math.pow(10, decimals) || 0;
    //   var data = [];
    //   var i, value;

    //   for (i = 0; i < count; ++i) {
    //       value = (from[i] || 0) + this.rand(min, max);
    //       if (this.rand() <= continuity) {
    //       data.push(Math.round(dfactor * value) / dfactor);
    //       } else {
    //       data.push(null);
    //       }
    //   }
    // return data;
    // }
            
    return (
        <>
            <CChart
                type="line" 
                data={data}
                options = {options}
                // actions={actions}
            />
        </>
    );
};

export default LineChart;