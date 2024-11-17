import React from 'react';
import CostOfEventsChart from '../CostofEventsChart';
import StatusPerUnitChart from '../StatusPerUnitChart';
import SubsystemBarChart from '../SubsystemBarChart';
import TableCard from '../TableCard';
import PercentageOfAchievedEventsChart from '../PercentageOfAchievedEventsChart';


const SubsystemDashboard: React.FC = () => {
    const tableData = [
        { title: '1- Income', quantity: 15, amount: '8,902.00 $' },
        { title: '2- Management', quantity: 16, amount: '8,273.00 $' },
        { title: '3- Maintenance / Repair', quantity: 16, amount: '7,420.00 $' },
        { title: '4- Replacement', quantity: 17, amount: '4,560.00 $' },
        { title: '5- Service', quantity: 18, amount: '19,657.00 $' },
        { title: '6- Other expense', quantity: 15, amount: '9,640.00 $' },
    ];

    const monthlyStatusData = [
        { month: 'Jan', Completed: 3, Cancelled: 1, Proposed: 1, Scheduled: 5, Accepted: 1, Rejected: 0 },
        { month: 'Feb', Completed: 4, Cancelled: 1, Proposed: 0, Scheduled: 1, Accepted: 1, Rejected: 2 },
        { month: 'Mar', Completed: 2, Cancelled: 3, Proposed: 2, Scheduled: 0, Accepted: 2, Rejected: 0 },
        { month: 'Apr', Completed: 2, Cancelled: 1, Proposed: 4, Scheduled: 4, Accepted: 1, Rejected: 0 },
        { month: 'May', Completed: 0, Cancelled: 1, Proposed: 1, Scheduled: 2, Accepted: 1, Rejected: 0 },
        { month: 'Jun', Completed: 3, Cancelled: 0, Proposed: 1, Scheduled: 2, Accepted: 1, Rejected: 1 },
        { month: 'Jul', Completed: 1, Cancelled: 3, Proposed: 0, Scheduled: 1, Accepted: 4, Rejected: 0 },
        { month: 'Aug', Completed: 1, Cancelled: 0, Proposed: 1, Scheduled: 1, Accepted: 0, Rejected: 0 },
        { month: 'Sep', Completed: 2, Cancelled: 0, Proposed: 0, Scheduled: 3, Accepted: 1, Rejected: 1 },
        { month: 'Oct', Completed: 0, Cancelled: 1, Proposed: 0, Scheduled: 1, Accepted: 1, Rejected: 0 },
        { month: 'Nov', Completed: 0, Cancelled: 0, Proposed: 1, Scheduled: 3, Accepted: 1, Rejected: 0 },
        { month: 'Dec', Completed: 3, Cancelled: 3, Proposed: 1, Scheduled: 8, Accepted: 0, Rejected: 1 },
    ];

    const costOfEventsData = [
        { month: 'Jan', expense: 7921 },
        { month: 'Feb', expense: 4874 },
        { month: 'Mar', expense: 902 },
        { month: 'Apr', expense: 6696 },
        { month: 'May', expense: 4807 },
        { month: 'Jun', expense: 6827 },
        { month: 'Jul', expense: 5454 },
        { month: 'Aug', expense: 2089 },
        { month: 'Sep', expense: 7884 },
        { month: 'Oct', expense: 0 },
        { month: 'Nov', expense: 1758 },
        { month: 'Dec', expense: 9240 },
    ];

    const subsystemData = [
        { subsystem: 'Site and Foundation', value: 100000 },
        { subsystem: 'Exterior Wall Covering', value: 45900 },
        { subsystem: 'Openings', value: 11500 },
        { subsystem: 'Access and Balconies', value: 67500 },
        { subsystem: 'Roofing', value: 192030 },
        { subsystem: 'Floors and Stairs', value: 5100 },
        { subsystem: 'Interior Surfaces', value: 52180 },
        { subsystem: 'Plumbing', value: 4995 },
        { subsystem: 'Electricity', value: 7050 },
        { subsystem: 'HVAC', value: 28290 },
        { subsystem: 'Consumables', value: 1415 },
        { subsystem: 'Equipment and Supplies', value: 117440 },
    ];

    const PERCENTAGEdata = [
        { month: 'Jan', percentage: 36.36 },
  { month: 'Feb', percentage: 55.56 },
  { month: 'Mar', percentage: 55.56 },
  { month: 'Apr', percentage: 25.00 },
  { month: 'May', percentage: 20.00 },
  { month: 'Jun', percentage: 37.50 },
  { month: 'Jul', percentage: 44.44 },
  { month: 'Aug', percentage: 33.33 },
  { month: 'Sep', percentage: 28.57 },
  { month: 'Oct', percentage: 33.33 },
  { month: 'Nov', percentage: 0.00 },
  { month: 'Dec', percentage: 37.50 },
      ];

    return (
        <div className="">
            <h1 className="text-3xl font-bold text-center mb-8">Subsystem Dashboard</h1>

            {/* Charts Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="col-span-1">

                </div>
                <div className="col-span-1">

                </div>
                <div className="col-span-1">

                </div>
                <div className="col-span-1">
                    <CostOfEventsChart data={costOfEventsData} />
                </div>
                <div className="col-span-1">
                    <StatusPerUnitChart data={monthlyStatusData} />
                </div>
                <div className="col-span-1">
                    <PercentageOfAchievedEventsChart data={PERCENTAGEdata} />
                </div>

            </div>
            {/* Flex Container for Labels and Table Cards */}
            <div className="flex items-start mb-8">
                {/* Left Side Labels */}
                <div className="flex flex-col text-purple-800 border-purple-300 mt-12 text-right">
                    <div className="font-medium pl-8 py-2 border-t-2 border-b-2 border-purple-300">Quantity</div>
                    <div className="font-medium pl-8 py-2 border-b-2 border-purple-300">Amount</div>
                </div>

                {/* Table Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    {tableData.map((data, index) => (
                        index % 2 === 0 && (
                            <TableCard
                                key={index}
                                title1={data.title}
                                quantity1={data.quantity}
                                amount1={data.amount}
                                title2={tableData[index + 1]?.title}
                                quantity2={tableData[index + 1]?.quantity}
                                amount2={tableData[index + 1]?.amount}
                            />
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubsystemDashboard;
