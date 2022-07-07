import React, { useState } from 'react';

//npm i @material-ui/core

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


const Tab2 = () => {
    const labelArr =["카메라1","카메라2","카메라3","카메라4"]
    const [value, setValue] = useState(0)
  
    const handleChange = (event, newValue) => {
      setValue(newValue)
      console.log("newValue" , newValue);

    }
  
    const click = (e) => {
      console.log("aaa",e.target.id);
      console.log("name",e.target.name);
    }
    return (
        <div style={{width : '800px'}}>
          <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="primary"
              textColor="primary"
              aria-label="scrollable force tabs example"
          >
              <Tab label="전체"/>
              {
                labelArr.map( (camera , index) => {
                  return(
                    <Tab label={camera} id={index+1} name={camera} onClick={e => click(e)} />
                  )
                })
              }
          </Tabs>
          <div>출럭 : {value}</div>

        </div>
    );
};

export default Tab2;