import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface PercentageOfAchievedEventsChartProps {
  data: { month: string; percentage: number }[];
}

const PercentageOfAchievedEventsChart: React.FC<PercentageOfAchievedEventsChartProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center p-4">
      {/* Title: uppercase and responsive text size */}
      <h2 className="uppercase text-sm sm:text-base md:text-lg my-4">Percentage of Achieved Events</h2>

      {/* Responsive container for chart responsiveness */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          {/* Horizontal grid lines only */}
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />

          {/* X Axis for months */}
          <XAxis dataKey="month" />

          {/* Y Axis for percentage, formatted with "%" */}
          <YAxis tickFormatter={(tick) => `${tick}%`} domain={[0, 100]} />

          {/* Tooltip to show detailed info on hover */}
          <Tooltip formatter={(value: number) => `${value}%`} />

          {/* Line for percentage achieved events */}
          <Line type="monotone" dataKey="percentage" stroke="#3B82F6" strokeWidth={2} dot={true} name="Achieved %" />

          {/* Legend */}
          <Legend layout="horizontal" verticalAlign="top" align="center" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PercentageOfAchievedEventsChart;
