import React from "react";

const students = [
  { name: "Alice", roll: "101", age: 17, email: "alice@mail.com" },
  { name: "Bob", roll: "102", age: 19, email: "bob@mail.com" },
  { name: "Charlie", roll: "103", age: 21, email: "charlie@mail.com" },
  { name: "David", roll: "104", age: 16, email: "david@mail.com" },
  { name: "Eva", roll: "105", age: 20, email: "eva@mail.com" },
  { name: "Frank", roll: "106", age: 18, email: "frank@mail.com" },
  { name: "Grace", roll: "107", age: 22, email: "grace@mail.com" },
  { name: "Henry", roll: "108", age: 17, email: "henry@mail.com" },
  { name: "Ivy", roll: "109", age: 19, email: "ivy@mail.com" },
  { name: "Jack", roll: "110", age: 23, email: "jack@mail.com" },
  { name: "Kiran", roll: "111", age: 15, email: "kiran@mail.com" },
  { name: "Liam", roll: "112", age: 20, email: "liam@mail.com" },
];

function StudentTable() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4 text-center">📋 Student Table</h1>
      <table className="w-full border-collapse border border-gray-700">
        {/* Table Head */}
        <thead>
          <tr className="bg-red-600 text-white">
            <th className="border border-gray-700 px-4 py-2">Name</th>
            <th className="border border-gray-700 px-4 py-2">Roll No.</th>
            <th className="border border-gray-700 px-4 py-2">Age</th>
            <th className="border border-gray-700 px-4 py-2">Email</th>
            <th className="border border-gray-700 px-4 py-2">Eligibility</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {students.map((student, index) => (
            <tr
              key={index}
              className={`text-center ${
                index % 2 === 0 ? "bg-black text-white" : "bg-gray-900 text-white"
              }`}
            >
              <td className="border border-gray-700 px-4 py-2">{student.name}</td>
              <td className="border border-gray-700 px-4 py-2">{student.roll}</td>
              <td className="border border-gray-700 px-4 py-2">{student.age}</td>
              <td className="border border-gray-700 px-4 py-2">{student.email}</td>
              <td
                className={`border border-gray-700 px-4 py-2 font-bold ${
                  student.age > 18 ? "text-green-400" : "text-red-400"
                }`}
              >
                {student.age > 18 ? "true" : "false"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
