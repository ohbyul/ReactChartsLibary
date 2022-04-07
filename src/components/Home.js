import React from 'react';
import LineChartApex from './apex/LineChartApex';
import LineDemo from './coreui/LineDemo';

const Home = () => {
    console.log("Home ");
    return (
        <div>
            <h1>home</h1>
            {/* <LineDemo /> */}
            <div id='box' style={{width : '50%', padding:'50px'}}>
                <LineChartApex />
            </div>
            
        </div>
    );
};

export default Home;