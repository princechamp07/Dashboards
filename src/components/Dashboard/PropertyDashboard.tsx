import React from 'react';
import BarChartComponent from '../BarChartComponent';
import PieChartComponent from '../PieChartComponent';
import PercentageOfActiveEventsChart from '../PercentageOfActiveEventsChart';
import CostOfEventsChart from '../CostofEventsChart';
import StatusPerUnitChart from '../StatusPerUnitChart';
import SubsystemBarChart from '../SubsystemBarChart';
import TableCard from '../TableCard';

const PropertyDashboard: React.FC = () => {
    const tableData = [
        { title: '1- Income', quantity: 15, amount: '8,902.00 $' },
        { title: '2- Management', quantity: 16, amount: '8,273.00 $' },
        { title: '3- Maintenance / Repair', quantity: 16, amount: '7,420.00 $' },
        { title: '4- Replacement', quantity: 17, amount: '4,560.00 $' },
        { title: '5- Service', quantity: 18, amount: '19,657.00 $' },
        { title: '6- Other expense', quantity: 15, amount: '9,640.00 $' },
    ];

    const barChartData = [
        { unit: 'Unit A', income: 500, expense: 300 },
        { unit: 'Unit B', income: 700, expense: 400 },
        { unit: 'Unit C', income: 200, expense: 150 },
        { unit: 'Unit D', income: 800, expense: 500 },
        { unit: 'Unit E', income: 600, expense: 350 },
    ];

    const costOfEventsData = [
        { month: 'Jan', income: 4434, expense: 7921 },
        { month: 'Feb', income: 4952, expense: 4874 },
        { month: 'Mar', income: 8299, expense: 902 },
        { month: 'Apr', income: 10680, expense: 6696 },
        { month: 'May', income: 2796, expense: 4807 },
        { month: 'Jun', income: 5445, expense: 6827 },
        { month: 'Jul', income: 6555, expense: 5454 },
        { month: 'Aug', income: 4380, expense: 2089 },
        { month: 'Sep', income: 2115, expense: 7884 },
        { month: 'Oct', income: 3613, expense: 0 },
        { month: 'Nov', income: 1922, expense: 1758 },
        { month: 'Dec', income: 8376, expense: 9240 },
    ];

    const activeEventsData = [
        { name: 'Unit 1', value: 18 },
        { name: 'Unit 2', value: 13 },
        { name: 'Unit 3', value: 6 },
        { name: 'Unit 4', value: 4 },
        { name: 'Unit 5', value: 1 },
        { name: 'Unit 6', value: 2 },
        { name: 'N/A', value: 18 },
    ];

    const statusData = [
        { name: 'Unknown', value: 29 },
        { name: 'Defective', value: 21 },
        { name: 'Warning', value: 6 },
        { name: 'Nothing to Report', value: 36 },
    ];

    const statusPerUnit = [
        { unit: 'Unit1', unknown: 9, defective: 8, warning: 3, nothingToReport: 9 },
        { unit: 'Unit2', unknown: 5, defective: 3, warning: 0, nothingToReport: 11 },
        { unit: 'Unit3', unknown: 1, defective: 4, warning: 2, nothingToReport: 3 },
        { unit: 'Unit4', unknown: 2, defective: 2, warning: 0, nothingToReport: 3 },
        { unit: 'Unit5', unknown: 0, defective: 0, warning: 0, nothingToReport: 1 },
        { unit: 'Unit6', unknown: 1, defective: 0, warning: 0, nothingToReport: 2 },
        { unit: 'N/A', unknown: 11, defective: 4, warning: 1, nothingToReport: 7 },
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

    return (
        <div className="">
            <h1 className="text-3xl font-bold text-center mb-8">Property Dashboard</h1>

            {/* Charts Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="col-span-1">
                    <BarChartComponent data={barChartData} />
                </div>
                <div className="col-span-1">
                    <PieChartComponent data={statusData} />
                </div>
                <div className="col-span-1">
                    <PercentageOfActiveEventsChart data={activeEventsData} title="PERCENTAGE OF ACTIVE EVENTS PER UNIT 
" />
                </div>
                <div className="col-span-1">
                    <CostOfEventsChart data={costOfEventsData} />
                </div>
                <div className="col-span-1">
                    <StatusPerUnitChart data={statusPerUnit} />
                </div>
                <div className="col-span-1">
                    <SubsystemBarChart data={subsystemData} />
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

export default PropertyDashboard;
