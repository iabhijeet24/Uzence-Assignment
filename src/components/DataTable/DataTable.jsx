import React, { useState } from "react";

export default function DataTable({ data }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } min-h-screen p-6`}
    >
      {/* Toggle Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className={`${darkMode ? "bg-gray-800" : "bg-blue-500 text-white"}`}>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Age</th>
              <th className="px-4 py-2 text-left">Eligibility</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={row.id}
                className={`${
                  idx % 2 === 0
                    ? darkMode
                      ? "bg-gray-700"
                      : "bg-white"
                    : darkMode
                    ? "bg-gray-600"
                    : "bg-gray-200"
                }`}
              >
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2">{row.email}</td>
                <td className="px-4 py-2">{row.age}</td>
                <td className="px-4 py-2 font-semibold">
                  {row.age > 18 ? (
                    <span className="text-green-500">True</span>
                  ) : (
                    <span className="text-red-500">False</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
