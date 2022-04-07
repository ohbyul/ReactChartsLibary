// import React from 'react';
// //npm install @nivo/core
// //npm i @nivo/pie
// import { storiesOf } from '@storybook/react'
// // npm i @storybook/react
// import { withKnobs, boolean } from '@storybook/addon-knobs'
// // import { animated } from '@react-spring/web'
// import { generateProgrammingLanguageStats } from '@nivo/generators'
// import { Pie } from '../src'

// const commonProperties = {
//         width: 900,
//         height: 500,
//         margin: { top: 80, right: 120, bottom: 80, left: 120 },
//         data: generateProgrammingLanguageStats(true, 9).map(({ label, ...d }) => ({
//             id: label,
//             ...d,
//         })),
//         animate: true,
//         activeOuterRadiusOffset: 8,
//     }
    
//     const legends = [
//         {
//             anchor: 'bottom' as const,
//             direction: 'row' as const,
//             toggleSerie: true,
//             translateY: 56,
//             itemWidth: 100,
//             itemHeight: 18,
//             itemTextColor: '#999',
//             symbolSize: 18,
//             symbolShape: 'circle' as const,
//             effects: [
//                 {
//                     on: 'hover' as const,
//                     style: {
//                         itemTextColor: '#000',
//                     },
//                 },
//             ],
//         },
//     ]
    
//     const stories = storiesOf('Pie', module)
    
//     stories.addDecorator(withKnobs)
    
//     stories.add('donut', () => <Pie {...commonProperties} innerRadius={0.6} />)

// const DonutChart = ({ dataWithArc, centerX, centerY }) => {
//     let total = 0
//     dataWithArc.forEach(datum => {
//         total += datum.value
//     })
//     return (
//         <div>
//             <labal>이벤트</labal>
//             <text
//                 x={centerX}
//                 y={centerY}
//                 textAnchor="middle"
//                 dominantBaseline="central"
//                 style={{
//                     fontSize: '52px',
//                     fontWeight: 600,
//                 }}
//             >
//                 {total}
//             </text>
            

//         </div>
//     );
// };
// export default DonutChart;