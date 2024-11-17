import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Define the types for two different possible data formats
interface UnitData {
  unit: string;
  unknown?: number;
  defective?: number;
  warning?: number;
  nothingToReport?: number;
}

interface MonthData {
  month: string;
  Completed?: number;
  Cancelled?: number;
  Proposed?: number;
  Scheduled?: number;
  Accepted?: number;
  Rejected?: number;
}

interface StatusPerUnitChartProps {
  data: (UnitData | MonthData)[];
}

const StatusPerUnitChart: React.FC<StatusPerUnitChartProps> = ({ data }) => {
  // Check if the data has `unit` or `month` to conditionally render different charts
  const isUnitData = (item: UnitData | MonthData): item is UnitData => 'unit' in item;

  return (
    <div className="flex justify-center items-center p-6">
      <div className="text-center w-full max-w-4xl">
        <h2 className="uppercase text-sm sm:text-base md:text-lg my-4">
          {isUnitData(data[0]) ? 'Status per Unit' : 'Status Per Event'}
        </h2>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <XAxis dataKey={isUnitData(data[0]) ? 'unit' : 'month'} />
            <YAxis hide />
            <Tooltip />
            <Legend layout="horizontal" verticalAlign="top" align="center" />

            {/* Conditionally render bars based on the data type */}
            {isUnitData(data[0]) ? (
              <>
                <Bar dataKey="unknown" stackId="a" fill="#ADD8E6" name="Unknown" />
                <Bar dataKey="defective" stackId="a" fill="#f54242" name="Defective" />
                <Bar dataKey="warning" stackId="a" fill="#FFEB3B" name="Warning" />
                <Bar dataKey="nothingToReport" stackId="a" fill="#4CAF50" name="Nothing to report" />
              </>
            ) : (
              <>
                <Bar dataKey="Completed" stackId="a" fill="blue" name="Completed" />
                <Bar dataKey="Cancelled" stackId="a" fill="#f54242" name="Cancelled" />
                <Bar dataKey="Proposed" stackId="a" fill="#FFD700" name="Proposed" />
                <Bar dataKey="Scheduled" stackId="a" fill="#90EE90" name="Scheduled" />
                <Bar dataKey="Accepted" stackId="a" fill="#FFA500" name="Accepted" />
                <Bar dataKey="Rejected" stackId="a" fill="#B0E0E6" name="Rejected" />
              </>
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatusPerUnitChart;
