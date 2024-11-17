import React from 'react';

interface TableCardProps {
    title1: string;
    quantity1: number;
    amount1: string;
    title2?: string;
    quantity2?: number;
    amount2?: string;
}

const TableCard: React.FC<TableCardProps> = ({
    title1,
    quantity1,
    amount1,
    title2,
    quantity2,
    amount2,
}) => {
    return (
        <div className="mt-4 rounded-lg text-purple-800 flex items-center">
            {/* Table with Two Columns */}
            <div className="grid grid-cols-2 w-full text-center">
                <div>
                    <div className="bg-purple-100 font-semibold border-b-2 border-purple-300 pb-2">{title1}</div>
                    <div className="py-2 px-1 font-semibold text-right border-l-2 border-b-2 border-purple-300 border-r-2">{quantity1}</div>
                    <div className="py-2 px-1 font-semibold text-right border-l-2 border-b-2 border-purple-300 border-r-2">{amount1}</div>
                </div>
                {title2 && (
                    <div>
                        <div className="bg-purple-100 font-semibold border-b-2 border-purple-300 pb-2">{title2}</div>
                        <div className="py-2 px-1 font-semibold text-right border-b-2 border-purple-300 border-r-2">{quantity2}</div>
                        <div className="py-2 px-1 font-semibold text-right border-b-2 border-purple-300 border-r-2">{amount2}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TableCard;
