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

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to= "/" >Home</Link></li>
            <li><Link to= "/apexbar" >Apex - bar</Link></li>
            <li><Link to= "/apexrealtime" >Apex - real time </Link></li>
            <li><Link to= "/coreline" >Coreline</Link></li>
            
          </ul>
        </nav>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/apexbar" element={<BarChart />} />
          <Route path = "/apexrealtime" element={<RealTimeCharts />} />
          <Route path = "/coreline" element={<LineChart />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



