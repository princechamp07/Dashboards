import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

interface PieChartComponentProps {
  data: { name: string; value: number }[]; // Data type: array of objects with 'name' and 'value'
}

const COLORS = ['#4287f5', '#f54242', '#f5d442', '#42f54b']; // Blue, Red, Yellow, Green

const PieChartComponent: React.FC<PieChartComponentProps> = ({ data }) => {
  // Calculate total for percentage display
  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  // Prepare data with percentages
  const pieData = data.map(entry => ({
    ...entry,
    value: Math.round((entry.value / total) * 100), // Round percentage value to the nearest whole number
  }));

  return (
    <div className="flex flex-col items-center p-4">
      {/* Title: uppercase, no bold or large text */}
      <h2 className="uppercase text-sm sm:text-base md:text-lg my-4">Status of Subsystems</h2>

      {/* ResponsiveContainer to make the chart responsive */}
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label={(entry) => `${entry.name}: ${entry.value}%`} // Show rounded percentage
            labelLine={false} // Removes the line pointing to the label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `${value}%`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
