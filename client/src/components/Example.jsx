import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [{name: '2016', uv: 4.800, pv: 4.700, amt: 2400},
  {name: '2017' +
      'год', uv: 5.000, pv: 2500, amt: 2500},
  {name: '2018', uv: 5.500, pv: 2600, amt: 2600},
  {name: '2019', uv: 6.000, pv: 2600, amt: 2600},
  {name: '2020', uv: 6.500, pv: 2600, amt: 2600},
  {name: '2021', uv: 7.000, pv: 2600, amt: 2600}];


const Example=()=>{
  return(
    <div>
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  )
}

export default Example;
