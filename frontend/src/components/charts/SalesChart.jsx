import React, { useContext } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DigiContext } from '../../context/DigiContext';
const SalesChart = () => {
  const {isLightTheme,isRechartHeight} = useContext(DigiContext)
  const data = [
    {
      name: "Saturday",
      stock: 31,
      order: 11
    },
    {
      name: "Sunday",
      stock: 40,
      order: 32
    },
    {
      name: "Monday",
      stock: 28,
      order: 45
    },
    {
      name: "Tuesday",
      stock: 51,
      order: 32
    },
    {
      name: "Wednesday",
      stock: 42,
      order: 34
    },
    {
      name: "Thursday",
      stock: 109,
      order: 52
    },
    {
      name: "Friday",
      stock: 28,
      order: 45
    },
  ];

  return (
    <ResponsiveContainer width="100%" maxHeight={410} minHeight={isRechartHeight}>
    <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3" stroke={`${isLightTheme ? 'hsl(0deg 0% 0% / 20%)': 'rgba(255, 255, 255, 0.2)'}`} />
      <XAxis dataKey="name" stroke={`${isLightTheme ? 'hsl(0deg 0% 27.45% / 70%)': 'hsl(0deg 0% 89.41% / 70%)'}`}/>
      <YAxis stroke={`${isLightTheme ? 'hsl(0deg 0% 27.45% / 70%)': 'hsl(0deg 0% 89.41% / 70%)'}`}/>
      <Tooltip />
      <Legend className='sales'/>
      <Area type='monotone' dataKey="stock" stackId="1" fill="hsl(205.29deg 100% 52.55% / 60%)" stroke="hsl(205.29deg 100% 52.55% / 60%)" />
      <Area type='monotone' dataKey="order" stackId="1" fill="#a9b4cc" stroke="#a9b4cc" />
    </AreaChart>
  </ResponsiveContainer>
  );
}

export default SalesChart;
