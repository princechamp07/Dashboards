import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface PercentageOfActiveEventsChartProps {
  data: ({ name?: string; subsystem?: string; value: number })[];
  title: string; // New title prop
}

const PercentageOfActiveEventsChart: React.FC<PercentageOfActiveEventsChartProps> = ({ data, title }) => {
  // Calculate the total number of active events for percentage calculation
  const totalActiveEvents = data.reduce((sum, entry) => sum + entry.value, 0);

  // Function to get either name or subsystem
  const getLabel = (entry: { name?: string; subsystem?: string }) => {
    return entry.name || entry.subsystem || 'Unknown'; // Default to 'Unknown' if both are missing
  };

  // Prepare the pie data with percentage
  const pieData = data.map(entry => ({
    ...entry,
    value: Math.round((entry.value / totalActiveEvents) * 100), // Round percentage to nearest whole number
  }));

  // Custom label component to render percentage inside the pie slice
  const renderCustomizedLabel = (entry: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, value } = entry;
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + (innerRadius - outerRadius) / 2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="14"
      >
        {`${value}%`} {/* Display rounded percentage */}
      </text>
    );
  };

  // Colors for each unit, from dark blue to slate blue
  const COLORS = [
    '#00008B', // Dark Blue for Unit 1
    '#1A237E', // Slightly lighter blue for Unit 2
    '#283593', // Medium dark blue for Unit 3
    '#3949AB', // Medium blue for Unit 4
    '#5C6BC0', // Light medium blue for Unit 5
    '#7986CB', // Light blue for Unit 6
    '#6A5ACD', // Slate blue for Unit 7
    '#7B68EE', // Medium Slate Blue for Unit 8
    '#8A2BE2', // Blue Violet for Unit 9
    '#9370DB', // Medium Purple for Unit 10
    '#BA55D3', // Medium Orchid for Unit 11
    '#DA70D6', // Orchid for Unit 12
  ];


  return (
    <div className="flex flex-col items-center p-4">
      {/* Dynamic Title: uppercase, no bold or large text */}
      <h2 className="uppercase text-sm sm:text-base md:text-lg my-4">{title}</h2>

      {/* ResponsiveContainer to make the chart responsive */}
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          {/* Doughnut chart with innerRadius for doughnut effect */}
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            innerRadius={70} // Inner radius for a doughnut effect
            labelLine={false} // Remove label line
            label={renderCustomizedLabel} // Use custom label for percentage inside slices
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `${value}%`} />
          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="right"
            wrapperStyle={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
            formatter={(value, entry, index) => {
              const label = getLabel(pieData[index]);
              return label;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PercentageOfActiveEventsChart;
