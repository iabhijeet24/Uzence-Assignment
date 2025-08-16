import React, { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  profession: string;
}

interface DataTableProps {
  data: User[];
  darkMode: boolean;
}

export default function DataTable({ data, darkMode }: DataTableProps) {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const toggleRow = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((row) => row.id));
    }
  };

  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="min-w-full border-collapse text-sm sm:text-base">
        <thead>
          <tr
            className={`${
              darkMode ? "bg-red-700 text-white" : "bg-red-600 text-white"
            }`}
          >
            <th className="px-4 py-3 text-center">
              <input
                type="checkbox"
                checked={selectedRows.length === data.length}
                onChange={toggleAll}
                className="w-4 h-4 accent-red-500 cursor-pointer"
              />
            </th>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Age</th>
            <th className="px-4 py-3 text-left">Eligibility</th>
            <th className="px-4 py-3 text-left">Profession</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={row.id}
              className={`transition ${
                idx % 2 === 0
                  ? darkMode
                    ? "bg-gray-900 text-white"
                    : "bg-white text-black"
                  : darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              <td className="px-4 py-3 text-center">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row.id)}
                  onChange={() => toggleRow(row.id)}
                  className="w-4 h-4 accent-red-600 cursor-pointer"
                />
              </td>
              <td className="px-4 py-3 font-medium">{row.name}</td>
              <td className="px-4 py-3">{row.email}</td>
              <td className="px-4 py-3">{row.age}</td>
              <td className="px-4 py-3 font-semibold">
                {row.age > 18 ? (
                  <span className="text-green-500">True</span>
                ) : (
                  <span className="text-red-500">False</span>
                )}
              </td>
              <td className="px-4 py-3">{row.profession}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
