import React from 'react';
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface CostOfEventsChartProps {
  data: { month: string; income: number; expense: number }[];
}

const CostOfEventsChart: React.FC<CostOfEventsChartProps> = ({ data }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-4">
      <h2 className="uppercase text-sm sm:text-base md:text-lg my-4">Cost of Events</h2> {/* Title in uppercase with responsive font size */}
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          {/* Show only plain horizontal grid lines */}
          <CartesianGrid horizontal stroke="#ccc" vertical={false} />
          
          {/* X Axis showing months from Jan to Dec */}
          <XAxis dataKey="month" />
          
          {/* Y Axis showing values dynamically based on data */}
          <YAxis domain={['auto', 'auto']} tickFormatter={(tick) => `$${tick.toLocaleString()}`}   ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]}/>
          
          {/* Tooltip for displaying information on hover */}
          <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
          
          {/* Area for Income */}
          <Area type="monotone" dataKey="income" stroke="#4287f5" fill="#4287f5" fillOpacity={0.3} name="Income" />
          
          {/* Area for Expense */}
          <Area type="monotone" dataKey="expense" stroke="#f54242" fill="#f54242" fillOpacity={0.3} name="Expense" />
          
          {/* Lines for Income and Expense */}
          <Line type="monotone" dataKey="income" stroke="#4287f5" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="expense" stroke="#f54242" strokeWidth={2} dot={false} />
          
          {/* Legend for labels */}
          <Legend layout="horizontal" verticalAlign="top" align="center" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CostOfEventsChart;
