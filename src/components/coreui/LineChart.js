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
            },
            {
                label: "바이오",
                backgroundColor: "rgba(76, 231, 191, 1)",
                borderColor: "rgba(76, 231, 191, 1)",
                pointBackgroundColor: "rgba(76, 231, 191, 1)",
                pointBorderColor: "#fff",
                data: [120, 220, 220, 330, 210, 300, 190, 280, 220, 200, 140, 140, 100, 120, 180, 140, 150, 100],
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
        // aspectRatio: 1.5,
        tooltips: {
          enabled: true
        }
      }
      console.log(options);

            
    return (
        <>
            <CChart
                type="line" 
                data={data}
                options = {options}
            />
        </>
    );
};

export default LineChart;