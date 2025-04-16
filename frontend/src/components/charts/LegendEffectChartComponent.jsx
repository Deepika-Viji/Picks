import React, { useContext } from 'react'
import { ComposedChart, Tooltip, Area, Bar, Line, XAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { DigiContext } from '../../context/DigiContext';

const LegendEffectChartComponent = () => {
  const {isLightTheme, isRechartHeight} = useContext(DigiContext)
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
  return (
    <ResponsiveContainer width="100%" maxHeight={410} minHeight={isRechartHeight}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke={`${isLightTheme? 'hsl(0deg 0% 0% / 70%)' : 'hsl(0deg 0% 89.41% / 70%)'}`}/>
        <Tooltip />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" fillOpacity={0.6} />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" fillOpacity={0.8} />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" strokeWidth={2} />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default LegendEffectChartComponent