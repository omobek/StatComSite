import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '2015',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2016',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '2017',
    uv: 2000,
    pv: 6800,
    amt: 2290,
  },
  {
    name: '2018',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '2019',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '2020',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '2021',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class ChartKg extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/customized-legend-event-l19fo';

  state = {
    opacity: {
      upp: 1,
      pv: 1,
    },
  };

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  };

  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  };

  render() {
    const { opacity } = this.state;

    return (
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={600}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
            <Line type="monotone" dataKey="pv" strokeOpacity={opacity.pv} stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" strokeOpacity={opacity.uv} stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
        <h5 className="notes">Общее количество 6 500 324</h5>
        <p className="notes">pv: МУЖЧИНЫ uv: ЖЕНЩИНЫ</p>
      </div>
    );
  }
}



