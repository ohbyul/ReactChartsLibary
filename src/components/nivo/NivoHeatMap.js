import React, { useEffect, useState } from 'react';
// npm install @nivo/heatmap
import { ResponsiveHeatMap } from '@nivo/heatmap'
//npm i @nivo/tooltip //설치 안해도됨

const NivoHeatMap = () => {
  const yLabel = ["쓰러짐","침입","배회","화재","안전모","안전복","군집"] 
  const timeLabel = ["00:00 ~ 00:59","01:00 ~ 01:59","02:00 ~ 02:59","03:00 ~ 03:59",
  "04:00 ~ 04:59","05:00 ~ 05:59","06:00 ~ 06:59","07:00 ~ 07:59",
  "08:00 ~ 08:59","09:00 ~ 09:59","10:00 ~ 10:59","11:00 ~ 11:59",
  "12:00 ~ 12:59","13:00 ~ 13:59","14:00 ~ 14:59","15:00 ~ 15:59",
  "16:00 ~ 16:59","17:00 ~ 17:59","18:00 ~ 18:59","19:00 ~ 19:59",
  "20:00 ~ 20:59","21:00 ~ 21:59","22:00 ~ 22:59","23:00 ~ 23:59",]
  
  const [data , setData] = useState([])
  const dataFormat = ' > ,.2~d'

  //데이터 형식에 맞게 세팅
  useEffect(()=>{
    let arr = []
    let timeData = []
    var min = 0
    var max = 100    
    yLabel.map( yValue =>{
      timeLabel.map(time => {
        timeData.push({"x" : time , "y" : (Math.floor(Math.random()*(max-min+1)) + min)})
      })
      arr.push({
        "id":yValue,
        "data": timeData
      })
      timeData=[]
    })
    setData(arr)
    console.log(arr); 
  },[])
  
  //툴팁 커스텀
  const CustomTooltip = (point) => {
    console.log(point.cell)
    let cell =point.cell
    let styleValue = {
      width: 'auto',
      maxHeight:'250px',
      color: `${cell.value > 49 ? '#ffffff' : '#000000'}`,
      marginBottom: '20px',
      padding: '10px',
      border:`2px solid ${cell.color}`,
      borderRadius : '5px',
      backgroundColor: cell.color,
    }
    var fontSize = {fontSize : '12px'}
    return (
        <div style={styleValue}>
          <span  style={fontSize}>{cell.data.x}</span>
          <br />
          <strong>{cell.serieId}</strong>
          <br />
          <br />
          <span style={fontSize}>이벤트 발생 비율 </span> <strong> {cell.value} <span style={fontSize}> % </span></strong>
          <br />
          <span  style={fontSize}>최다 발생 카메라 </span> <strong> ?? </strong>
        </div>
    )
  }

  //data 형식 
  const dat1 = [
      {
        "id": yLabel[0],
        "data": [
          {
            "x": timeLabel[0],
            "y": 70563
          },
          {
            "x": "Subway",
            "y": -85825
          },
          {
            "x": "Bus",
            "y": 41750
          },
          {
            "x": "Car",
            "y": 37116
          },
          {
            "x": "Boat",
            "y": 41415
          },
          {
            "x": "Moto",
            "y": 38055
          },
          {
            "x": "Moped",
            "y": -35269
          },
          {
            "x": "Bicycle",
            "y": -6542
          },
          {
            "x": "Others",
            "y": 88488
          }
        ]
      },
    ]

    return (
        <div style={{ width: 'auto', height: '500px', margin: '0 auto' }}>
            <ResponsiveHeatMap
              data={data} //chart에 사용될 데이터
              tooltip={CustomTooltip}
              margin={{ top: 60, right: 90, bottom: 100, left: 90 }}
              valueFormat={dataFormat}  //그래프 데이터 형식
              xOuterPadding={0.1}
              enableGridX={true}
              axisTop={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -45,
                legend: 'TIME',
                legendPosition: 'middle',
                legendOffset: 80,   // 레전드타이틀 높이 조절 + 일수록 아래로
              }}
              axisLeft={{
                tickSize: 10,
                tickPadding: 2,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: -60
              }}
              colors={{
                  type: 'diverging',
                  scheme: 'reds',
                  divergeAt: 0.75,   //분기점?? 최소값과 최대값 사이의 분기점 (0~1) +일수록 전체적인 색 연해짐 
                  minValue: 0,
                  maxValue: 100,
              }}
              emptyColor="#ffffff"
              borderColor={{
                  from: 'color',
                  modifiers: [
                      [
                          'darker',
                          0.8
                      ]
                  ]
              }}
              label={function(e){return e.value + "%" }}
              labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        2
                    ]
                ]
              }}
              legends={[
                  {
                      anchor: 'right',
                      min : 0,
                      max : 100,
                      translateX: 40,
                      translateY: 0,
                      length: 330,
                      thickness: 15,
                      direction: 'column',
                      tickPosition: 'after',
                      tickSize: 10,
                      tickSpacing: 3,
                      tickOverlap: false,   //막대에 라인
                      tickFormat:{dataFormat}, //레전드 형식
                      title: '%',
                      titleAlign: 'start',
                      titleOffset: 5,
                  }
              ]}
              annotations={[]}
            />
        </div>
    );
};

export default NivoHeatMap;