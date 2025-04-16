import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DigiContext } from '../../context/DigiContext';

const BalanceChart = () => {
  const { isLightTheme, isRechartHeight } = useContext(DigiContext)
  const data = [
    {
      name: "Friday",
      stock: 31,
      order: 11
    },
    {
      name: "Saturday",
      stock: 40,
      order: 32
    },
    {
      name: "Sunday",
      stock: 28,
      order: 45
    },
    {
      name: "Monday",
      stock: 51,
      order: 32
    },
    {
      name: "Tuesday",
      stock: 42,
      order: 34
    },
    {
      name: "Wednesday",
      stock: 109,
      order: 52
    },
    {
      name: "Thursday",
      stock: 100,
      order: 41
    },
  ];

  return (
    <ResponsiveContainer width="100%" maxHeight={410} minHeight={isRechartHeight}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 15 }}>
        <CartesianGrid strokeDasharray="3" stroke={`${isLightTheme ? 'rgb(0 0 0 / 20%)':'rgba(255, 255, 255, 0.2)'}`} />
        <XAxis dataKey="name" stroke={`${isLightTheme? 'hsl(0deg 0% 0% / 70%)' : 'hsl(0deg 0% 89.41% / 70%)'}`}/>
        <YAxis stroke={`${isLightTheme? 'hsl(0deg 0% 0% / 70%)' : 'hsl(0deg 0% 89.41% / 70%)'}`}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="stock" stackId="stack" fill="#0D99FF" />
        <Bar dataKey="order" stackId="stack" fill="#a9b4cc" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BalanceChart;
