import React, { useContext } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { DigiContext } from '../../context/DigiContext';

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const ScatterChartWithCells = () => {
  const {isLightTheme,isRechartHeight} = useContext(DigiContext)
  return (
    <ResponsiveContainer width="100%" maxHeight={410} minHeight={isRechartHeight}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="X" stroke={`${isLightTheme? 'hsl(0deg 0% 0% / 70%)' : 'hsl(0deg 0% 89.41% / 70%)'}`}/>
        <YAxis type="number" dataKey="y" name="Y" stroke={`${isLightTheme? 'hsl(0deg 0% 0% / 70%)' : 'hsl(0deg 0% 89.41% / 70%)'}`}/>
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />

        {Object.keys(data[0]).map((dataKey, index) => (
          <Scatter
            key={dataKey}
            name={dataKey}
            data={data}
            fill={COLORS[index % COLORS.length]}
            line
          />
        ))}
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterChartWithCells;
