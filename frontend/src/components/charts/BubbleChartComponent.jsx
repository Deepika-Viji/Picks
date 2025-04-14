import React, { useContext } from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DigiContext } from '../../context/DigiContext';

const BubbleChartComponent = () => {
  const {isLightTheme,isRechartHeight} = useContext(DigiContext)
    const data01 = [
        { hour: '12a', index: 1, value: 170 },
        { hour: '1a', index: 1, value: 180 },
        { hour: '2a', index: 1, value: 150 },
        { hour: '3a', index: 1, value: 120 },
        { hour: '4a', index: 1, value: 200 },
        { hour: '5a', index: 1, value: 300 },
        { hour: '6a', index: 1, value: 400 },
        { hour: '7a', index: 1, value: 200 },
        { hour: '8a', index: 1, value: 100 },
        { hour: '9a', index: 1, value: 150 },
        { hour: '10a', index: 1, value: 160 },
        { hour: '11a', index: 1, value: 170 },
        { hour: '12a', index: 1, value: 180 },
        { hour: '1p', index: 1, value: 144 },
        { hour: '2p', index: 1, value: 166 },
        { hour: '3p', index: 1, value: 145 },
        { hour: '4p', index: 1, value: 150 },
        { hour: '5p', index: 1, value: 170 },
        { hour: '6p', index: 1, value: 180 },
        { hour: '7p', index: 1, value: 165 },
        { hour: '8p', index: 1, value: 130 },
        { hour: '9p', index: 1, value: 140 },
        { hour: '10p', index: 1, value: 170 },
        { hour: '11p', index: 1, value: 180 },
      ];
      
      const data02 = [
        { hour: '12a', index: 1, value: 160 },
        { hour: '1a', index: 1, value: 180 },
        { hour: '2a', index: 1, value: 150 },
        { hour: '3a', index: 1, value: 120 },
        { hour: '4a', index: 1, value: 200 },
        { hour: '5a', index: 1, value: 300 },
        { hour: '6a', index: 1, value: 100 },
        { hour: '7a', index: 1, value: 200 },
        { hour: '8a', index: 1, value: 100 },
        { hour: '9a', index: 1, value: 150 },
        { hour: '10a', index: 1, value: 160 },
        { hour: '11a', index: 1, value: 160 },
        { hour: '12a', index: 1, value: 180 },
        { hour: '1p', index: 1, value: 144 },
        { hour: '2p', index: 1, value: 166 },
        { hour: '3p', index: 1, value: 145 },
        { hour: '4p', index: 1, value: 150 },
        { hour: '5p', index: 1, value: 160 },
        { hour: '6p', index: 1, value: 180 },
        { hour: '7p', index: 1, value: 165 },
        { hour: '8p', index: 1, value: 130 },
        { hour: '9p', index: 1, value: 140 },
        { hour: '10p', index: 1, value: 160 },
        { hour: '11p', index: 1, value: 180 },
      ];
      
  return (
    <ResponsiveContainer width="100%" maxHeight={410} minHeight={isRechartHeight}>
    <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <CartesianGrid />
      <XAxis type="category" dataKey="hour" name="Hour" stroke={`${isLightTheme? 'hsl(0deg 0% 0% / 70%)' : 'hsl(0deg 0% 89.41% / 70%)'}`}/>
      <YAxis type="number" dataKey="value" name="Value" stroke={`${isLightTheme? 'hsl(0deg 0% 0% / 70%)' : 'hsl(0deg 0% 89.41% / 70%)'}`}/>
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="Data 01" data={data01} fill="#8884d8" />
      <Scatter name="Data 02" data={data02} fill="#82ca9d" />
    </ScatterChart>
  </ResponsiveContainer>
  )
}

export default BubbleChartComponent