import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

interface StackedBarChartComponentProps {
  data: Array<{
    subsystem: string;
    Unknown: number;
    Defective: number;
    Warning: number;
    'Nothing to report': number;
  }>;
}

const COLORS = {
  Unknown: '#87CEFA', // Light blue for "Unknown"
  Defective: '#FF6347', // Red for "Defective"
  Warning: '#FFD700', // Yellow for "Warning"
  'Nothing to report': '#90EE90', // Light green for "Nothing to report"
};

const StackedBarChartComponent: React.FC<StackedBarChartComponentProps> = ({ data }) => {
  const statusKeys = Object.keys(data[0]).filter((key) => key !== 'subsystem'); // Extract status keys dynamically

  return (
    <div className="w-full flex flex-col items-center justify-center py-4">
      <h2 className="uppercase text-base md:text-lg my-4">Status per Systems</h2> {/* Title */}

      <ResponsiveContainer width="110%" height={400}>
        <BarChart layout="vertical" data={data} barCategoryGap="4">
          
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="subsystem" width={200} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />

          {/* Create a Bar for each status */}
          {statusKeys.map((status) => (
            <Bar
              key={status}
              dataKey={status}
              stackId="a"
              fill={COLORS[status as keyof typeof COLORS]}
               
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackedBarChartComponent;
