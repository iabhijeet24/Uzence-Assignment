import React, { useState } from "react";

function DataTable({ data, columns, loading, selectable }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  // Sorting logic
  const handleSort = (key) => {
    const order = sortKey === key && sortOrder === "asc" ? "desc" : "asc";
    setSortKey(key);
    setSortOrder(order);
  };

  const sortedData = sortKey
    ? [...data].sort((a, b) =>
        sortOrder === "asc"
          ? String(a[sortKey]).localeCompare(String(b[sortKey]))
          : String(b[sortKey]).localeCompare(String(a[sortKey]))
      )
    : data;

  // Row selection logic
  const handleSelect = (row) => {
    let updated = selectedRows.includes(row)
      ? selectedRows.filter((r) => r !== row)
      : [...selectedRows, row];
    setSelectedRows(updated);
  };

  // Loading state
  if (loading) return <p>Loading...</p>;

  // Empty state
  if (!data || data.length === 0) return <p>No data available.</p>;

  return (
    <table className="min-w-full border">
      <thead>
        <tr>
          {selectable && <th className="px-2">✔</th>}
          {columns.map((col) => (
            <th
              key={col.key}
              onClick={() => handleSort(col.key)}
              className="px-4 py-2 cursor-pointer border"
            >
              {col.label}{" "}
              {sortKey === col.key ? (sortOrder === "asc" ? "▲" : "▼") : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <tr key={row.id || index} className="border-b">
            {selectable && (
              <td className="px-2">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row)}
                  onChange={() => handleSelect(row)}
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={col.key} className="px-4 py-2 border">
                {String(row[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
