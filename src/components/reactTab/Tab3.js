import React from 'react';

//npm i @material-ui/core

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


const Tab3 = () => {
    const [value, setValue] = React.useState(0);
  
    function handleChange(event, newValue) {
      setValue(newValue);
    }
  
    return (
        <div style={{width : '800px'}}>
          <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="primary"
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
          >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
              <Tab label="Item Four" />
              <Tab label="Item Five" />
              <Tab label="Item Six" />
              <Tab label="Item Seven" />
          </Tabs>
        </div>
    );
};

export default Tab3;