import React, { useState } from "react";
import DataTable from "./components/DataTable/DataTable";
import InputField from "./components/InputField/InputField";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const users = [
    { id: 1, name: "Amit Sharma", email: "amitsharma@gmail.com", age: 20, profession: "Software Engineer" },
    { id: 2, name: "Priya Verma", email: "priya12verma@gmail.com", age: 17, profession: "Student" },
    { id: 3, name: "Rohit Kumar", email: "rohitkumar021@gmail.com", age: 22, profession: "Marketing Executive" },
    { id: 4, name: "Neha Singh", email: "nehasingh886@gmail.com", age: 16, profession: "Student" },
    { id: 5, name: "Arjun Mehta", email: "arjun@gmail.com", age: 25, profession: "Doctor" },
    { id: 6, name: "Sneha Iyer", email: "sneha.iyer@gmail.com", age: 30, profession: "Professor" },
    { id: 7, name: "Vikram Nair", email: "vikramnair21@gmail.com", age: 15, profession: "Student" },
    { id: 8, name: "Anjali Gupta", email: "guptaanjali@gmail.com", age: 18, profession: "Content Writer" },
    { id: 9, name: "Karan Malhotra", email: "karanmalhotra224@gmail.com", age: 19, profession: "Graphic Designer" },
  ];

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Toggle Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition"
        >
          <img
            src={
              darkMode
                ? "https://cdn-icons-png.flaticon.com/512/4814/4814268.png" // ☀️ Sun
                : "https://cdn-icons-png.flaticon.com/512/6714/6714978.png" // 🌙 Moon
            }
            alt="toggle theme"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Input Section */}
      <div
        className={`max-w-md mx-auto mb-10 space-y-4 p-6 rounded-lg shadow-md ${
          darkMode ? "bg-red-950/70" : "bg-red-100"
        }`}
      >
        <InputField
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
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

      {/* Data Table Section */}
      <div
        className={`rounded-lg shadow-md overflow-hidden ${
          darkMode ? "bg-red-950/70" : "bg-red-100"
        }`}
      >
        <DataTable data={users} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
