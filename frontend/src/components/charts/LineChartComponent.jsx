import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { chartData } from '../../data/Data';
import { DigiContext } from '../../context/DigiContext';

const LineChartComponent = () => {
  const { isLightTheme, isRechartHeight } = useContext(DigiContext)
  return (
    <ResponsiveContainer width="100%" maxHeight={410} minHeight={isRechartHeight}>
      <LineChart data={chartData}>
        <CartesianGrid stroke="#334652" strokeDasharray="3" />
        <XAxis dataKey="name" fill="#FFFFFF" stroke={`${isLightTheme? 'hsl(0deg 0% 0% / 70%)' : 'hsl(0deg 0% 89.41% / 70%)'}`}/>
        <YAxis stroke={`${isLightTheme? 'hsl(0deg 0% 0% / 70%)' : 'hsl(0deg 0% 89.41% / 70%)'}`}/>
        <Tooltip />
        <Line type="monotone" dataKey="Desktops" stroke="#037fe0" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
