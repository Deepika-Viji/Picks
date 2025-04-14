import React, { useContext } from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter, ResponsiveContainer } from 'recharts';

import { mixedChartData } from '../../data/Data';
import { DigiContext } from '../../context/DigiContext';

const MixedChartComponent = () => {
  const { isLightTheme, isRechartHeight } = useContext(DigiContext)
  return (
    <ResponsiveContainer width="100%" maxHeight={410} minHeight={isRechartHeight}>
      <ComposedChart data={mixedChartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" stroke={`${isLightTheme? 'hsl(0deg 0% 0% / 70%)' : 'hsl(0deg 0% 89.41% / 70%)'}`}/>
        <YAxis stroke={`${isLightTheme? 'hsl(0deg 0% 0% / 70%)' : 'hsl(0deg 0% 89.41% / 70%)'}`}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="TEAM A" fill="#008ffb" barSize={20} />
        <Area type="monotone" dataKey="TEAM B" fill="#0d5258" stroke="#00e396" />
        <Line type="monotone" dataKey="TEAM C" stroke="rgb(254 176 25)" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default MixedChartComponent;
