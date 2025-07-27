import React from "react";
import { FaTrash } from "react-icons/fa";
import HelpBanner from "../../../Pages/Dashboard/HelpBanner";

/**
 
 * @typedef {object} DashedTableProps
 * @property {string[]} headers 
 * @property {Array<Array<React.ReactNode>>} data 

 * @property {string} [className]
 */

/**
 * DashedTable component displays data in a table with dashed borders.
 * @param {DashedTableProps} props
 */
const OrdersTable = ({ headers, data, className = "" }) => {
  if (!headers || headers.length === 0) {
    return <p className="text-red-500">Error: Table headers are required.</p>;
  }
  if (!data || data.length === 0) {
    return <p className="text-gray-500">No data to display in the table.</p>;
  }

  console.log(data);
  return (
    <div className="flex flex-col gap-5">
      <div
        className={`overflow-x-auto bg-white rounded-lg border border-dashed border-slate-300 ${className} overflow-y-scroll h-[70vh]`}
      >
        <table className="min-w-full divide-y divide-dashed divide-gray-300">
          {/* Table Header */}
          <thead className="bg-gray-50">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-dashed border-slate-300"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          {/* Table Body */}
          <tbody className="divide-y divide-dashed divide-gray-200">
            {data?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 border-b border-dashed border-slate-300">
                  <p>{rowIndex + 1}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 border-b border-dashed border-slate-300">
                  <p>{row.courseName}</p>
                  <p className="italic text-slate-500 text-xs">{row.orderId}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 border-b border-dashed border-slate-300">
                  <div className="flex flex-col gap-3">
                    {row.carts.map((cart) => (
                      <p className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-slate-300 block"></span>
                        {cart.courseName}
                      </p>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 border-b border-dashed border-slate-300">
                  <p className="p-2 rounded-full text-green-500">Paid</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <HelpBanner />
    </div>
  );
};

export default OrdersTable;
