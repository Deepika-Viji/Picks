import React, { useContext } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { chartData } from '../../data/Data';
import { DigiContext } from '../../context/DigiContext';

const AreaChartComponent = () => {
  const { isLightTheme, isRechartHeight } = useContext(DigiContext)
  return (
    <ResponsiveContainer width="100%" maxHeight={410} minHeight={isRechartHeight}>
      <AreaChart data={chartData}>
        <CartesianGrid stroke="#334652" strokeDasharray="3" />
        <XAxis dataKey="name" fill="#FFFFFF"  stroke={`${isLightTheme? 'hsl(0deg 0% 0% / 70%)' : 'hsl(0deg 0% 89.41% / 70%)'}`}/>
        <YAxis stroke={`${isLightTheme? 'hsl(0deg 0% 0% / 70%)' : 'hsl(0deg 0% 89.41% / 70%)'}`}/>
        <Tooltip />
        <Area type="monotone" dataKey="Desktops" stroke="#037fe0" fill="#2a4d76" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaChartComponent