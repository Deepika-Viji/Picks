import React, { useContext } from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';
import { DigiContext } from '../../context/DigiContext';

function AudienceChart() {
  const { isLightTheme, isRechartHeight } = useContext(DigiContext)
  const data = [
    {
      name: "January",
      stock: 31,
      order: 51,
    },
    {
      name: "February",
      stock: 40,
      order: 19,
    },
    {
      name: "March",
      stock: 28,
      order: 55,
    },
    {
      name: "April",
      stock: 51,
      order: 56,
    },
    {
      name: "May",
      stock: 42,
      order: 54,
    },
    {
      name: "June",
      stock: 109,
      order: 42,
    },
    {
      name: "July",
      stock: 100,
      order: 54,
    },
    {
      name: "August",
      stock: 40,
      order: 198,
    },
  ];

  return (
    <ResponsiveContainer width="100%" maxHeight={410} minHeight={isRechartHeight}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={`${isLightTheme ? 'rgb(0 0 0 / 20%)':'rgba(255, 255, 255, 0.2)'}`} />
        <XAxis dataKey="name" stroke={`${isLightTheme? 'hsl(0deg 0% 0% / 70%)' : 'hsl(0deg 0% 89.41% / 70%)'}`}/>
        <YAxis stroke={`${isLightTheme? 'hsl(0deg 0% 0% / 70%)' : 'hsl(0deg 0% 89.41% / 70%)'}`}/>
        <Tooltip />
        <Area type="monotone" dataKey="stock" stackId="1" stroke="#1490e3" fill="#1490e3" />
        <Area type="monotone" dataKey="order" stackId="1" stroke="#37c3ed" fill="#37c3ed" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default AudienceChart;
