import React, { PureComponent } from "react";
import { BarChart, Bar, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class CustomeBarChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/stacked-bar-chart-s47i2";

  render() {
    return (
      <ResponsiveContainer width="100%" minHeight={220} height="90%">
        <BarChart layout="horizontal" data={data}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis  />
          <YAxis dataKey="name"/> */}
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" stackId="a" fill="#508FF4" />
          <Bar dataKey="pv" stackId="a" fill="#FB6A3B" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
