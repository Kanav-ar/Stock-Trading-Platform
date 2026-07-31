import type { ReactNode } from "react";

type Cell = ReactNode | string[];

interface TableRow {
  title: string;
  cells: Cell[];
}

export interface Table {
  headers: string[];
  rows: TableRow[];
}

export interface PricingTableProps {
  data: Table;
  className?:string;
}
export default function PricingTable({ data, className }: PricingTableProps) {
  return (
    <div className={className}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            {data.headers.map((header) => (
              <th
                key={header}
                className=" px-6 py-4 text-left text-sm font-bold text-gray-600 dark:text-gray-300"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-sm text-gray-500 dark:text-gray-400">
          {data.rows.map((row) => (
            <tr
              key={row.title}
              className="border-b border-gray-300 dark:border-gray-700"
            >
              <td className=" px-6 py-5  font-medium text-gray-700 dark:text-gray-200">
                {row.title}
              </td>

              {row.cells.map((cell, index) => (
                <td key={index} className="px-6 py-5 ">
                  {Array.isArray(cell)
                    ? cell.map((line) => (
                        <p key={line} className="leading-7 last:mb-0 mb-1">
                          {line}
                        </p>
                      ))
                    : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* <tbody>
          {data.rows.map(row => <tr key={row.title}><td>{row.title}</td>
              {row.cells.map((cell,index) => <td key={index}>{cell}</td>)}
          </tr>)}
      </tbody> */}
    </div>
  );
}
