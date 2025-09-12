import React from "react";
import { FaTrash } from "react-icons/fa";

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
const CartsTable = ({ headers, data, className = "", handleDelete }) => {
  if (!headers || headers.length === 0) {
    return <p className="text-red-500">Error: Table headers are required.</p>;
  }
  if (!data || data.length === 0) {
    return <p className="text-gray-500">No data to display in the table.</p>;
  }

  // console.log(data);
  return (
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
                <img src={`${row.image}`} alt="" className="w-16 rounded-md" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 border-b border-dashed border-slate-300">
                <p>{row.courseName}</p>
                <p className="italic text-slate-500 text-xs">{row.courseId}</p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 border-b border-dashed border-slate-300">
                <p>{row.courseFee} BDT</p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 border-b border-dashed border-slate-300">
                <button className="p-2 rounded-full text-slate-500">
                  {row.status}
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 border-b border-dashed border-slate-300">
                <button
                  onClick={() => handleDelete(row.courseId)}
                  className="p-2 rounded-full bg-slate-100 text-red-500"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartsTable;
