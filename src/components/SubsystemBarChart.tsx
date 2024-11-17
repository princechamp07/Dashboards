import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

interface SubsystemValueChartProps {
  data: { subsystem: string; value: number }[]; // Data structure for the chart
}

const SubsystemValueChart: React.FC<SubsystemValueChartProps> = ({ data }) => {
  return (
    <div className="w-full p-6">
      {/* Title for the Chart */}
      <h2 className="uppercase text-center text-sm sm:text-base md:text-lg my-4">Subsystem Value</h2>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          layout="vertical"
          data={data}
          barSize={20}
          margin={{
            top: 20,
            right: 30,   // Provides space on the right for the Y-axis labels and values
            bottom: 20,
            left: 30,    // Provides space on the left for the Y-axis labels
          }}
        >
          {/* Bar for subsystem values */}
          <Bar dataKey="value" fill="#4287f5" name="Subsystem Value">
            {/* Display values outside the bars */}
            <LabelList dataKey="value" position="right" fill="#000" fontSize={12} />
          </Bar>

          {/* Remove the X-axis labels */}
          <XAxis type="number" hide={true} />

          {/* Y-axis with adjusted padding */}
          <YAxis
            dataKey="subsystem"
            type="category"
            fontSize={12}
            tick={{ fontSize: 12, padding: 10 }} // Adjust the padding for Y-axis labels
            interval={0} // Ensures all Y-axis labels are visible
          />

          {/* Tooltip */}
          <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SubsystemValueChart;
