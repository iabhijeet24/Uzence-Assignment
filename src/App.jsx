import React, { useState } from "react";
import DataTable from "./components/DataTable/DataTable";
import InputField from "./components/InputField/InputField";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 20 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", age: 17 },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", age: 22 },
    { id: 4, name: "Bob Brown", email: "bob@example.com", age: 16 },
    { id: 5, name: "Charlie Green", email: "charlie@example.com", age: 25 },
    { id: 6, name: "Diana Prince", email: "diana@example.com", age: 30 },
    { id: 7, name: "Evan Wright", email: "evan@example.com", age: 15 },
    { id: 8, name: "Fiona Adams", email: "fiona@example.com", age: 18 },
    { id: 9, name: "George King", email: "george@example.com", age: 19 },
    { id: 10, name: "Hannah Lee", email: "hannah@example.com", age: 21 },
    { id: 11, name: "Ian Scott", email: "ian@example.com", age: 14 },
    { id: 12, name: "Julia White", email: "julia@example.com", age: 23 },
  ];

  return (
    <div
      className={`min-h-screen p-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Toggle Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Input Fields Section */}
      <div className="max-w-md mx-auto mb-10 space-y-4">
        <InputField
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          helperText="Please enter your real name"
          clearable
          variant="outlined"
          size="md"
          darkMode={darkMode}
        />

        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          errorMessage="Password must be at least 6 characters"
          invalid={password.length > 0 && password.length < 6}
          passwordToggle
          variant="filled"
          size="md"
          darkMode={darkMode}
        />

        <InputField
          label="Email"
          placeholder="Enter your email"
          variant="ghost"
          size="lg"
          darkMode={darkMode}
        />
      </div>

      {/* DataTable Section */}
      <DataTable data={users} />
    </div>
  );
}

export default App;
