import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface BarChartComponentProps {
  data: { unit: string; income: number; expense: number }[];
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({ data }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-4">
      <h2 className="uppercase text-sm sm:text-base md:text-lg my-4">Cost of Units</h2> {/* Title in uppercase with responsive font size */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart layout="vertical" data={data} barSize={20}>
          <Bar dataKey="income" fill="#4287f5" name="Income" />
          <Bar dataKey="expense" fill="#f54242" name="Expense" />
          <XAxis type="number" />
          <YAxis dataKey="unit" type="category" />
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="top" align="center" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
