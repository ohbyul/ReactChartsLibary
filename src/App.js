import React from "react";
//npm install react-router-dom --save
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";
import BarChart from "./components/apex/BarChart";
import RealTimeCharts from "./components/apex/RealTimeCharts";
import LineChart from "./components/coreui/LineChart";


import Home from "./components/Home";
import DonutChart from "./components/apex/DonutChart";
import RedialBar from "./components/apex/RedialBar";
import LineMixedBarChart from "./components/apex/LineMixedBarChart";
import SumChart from "./components/apex/SumChart";
import SumMixLineChart from "./components/apex/SumMixLineChart";
import BarMixChartJS from "./components/chartJs/BarMixChartJS";
import MixChart from "./components/chartJs/MixChart";
import PieChart from "./components/chartJs/PieChart";
import MultiLineChart from "./components/chartJs/MultiLineChart";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to= "/" >Home</Link></li>
            {/* <li><Link to= "/apexrealtime" >Apex - real time </Link></li> */}
            <li><Link to= "/coreline" >Coreline</Link></li>
            <br />
            <li><Link to= "/apexbar" >Apex - bar</Link></li>
            <li><Link to= "/donutChart" >DonutChart-apex</Link></li>
            <li><Link to= "/redialBar" >RedialBar-apex</Link></li>
            <li><Link to= "/lineMixedBarChart" >LineMixedBarChart-apex</Link></li>
            <li><Link to= "/sumChart" >SumChart-apex</Link></li>
            <li><Link to= "/sumMixLineChart" >SumMixLineChart-apex</Link></li>
            <br />
            <li><Link to= "/barChartJS" >bar-chart.js</Link></li>
            <li><Link to= "/mixChart" >mixChart-chart.js</Link></li>
            <li><Link to= "/pieChart" >PieChart-chart.js</Link></li>
            <li><Link to= "/multiLineChart" >multiLineChart-chart.js</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/apexbar" element={<BarChart />} />
          {/* <Route path = "/apexrealtime" element={<RealTimeCharts />} /> */}
          <Route path = "/coreline" element={<LineChart />} />
          <Route path = "/donutChart" element={<DonutChart />} />
          <Route path = "/redialBar" element={<RedialBar />} />
          <Route path = "/lineMixedBarChart" element={<LineMixedBarChart />} />
          <Route path = "/sumChart" element={<SumChart />} />
          <Route path = "/sumMixLineChart" element={<SumMixLineChart />} />
          <Route path = "/barChartJS" element={<BarMixChartJS />} />
          <Route path = "/mixChart" element={<MixChart />} />
          <Route path = "/pieChart" element={<PieChart />} />
          <Route path = "/multiLineChart" element={<MultiLineChart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



