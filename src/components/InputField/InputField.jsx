import React, { useState } from "react";

export default function InputField({
  value,
  onChange,
  label,
  placeholder = "Enter text",
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "md",
  type = "text",
  clearable = false,
  passwordToggle = false,
  darkMode = false,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [suggestedPassword, setSuggestedPassword] = useState("");

  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  };

  const variantClasses = {
    outlined: `border ${
      invalid ? "border-red-500" : "border-gray-400"
    } rounded-lg`,
    filled: `bg-gray-200 ${
      darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
    } rounded-lg`,
    ghost: "border-b border-gray-400 rounded-none",
  };

  const inputType =
    type === "password" && passwordToggle
      ? showPassword
        ? "text"
        : "password"
      : type;

  // Random Password Generator
  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let pass = "";
    for (let i = 0; i < 12; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setSuggestedPassword(pass);
    if (onChange) {
      onChange({ target: { value: pass } });
    }
  };

  return (
    <div
      className={`flex flex-col w-full mb-4 ${disabled ? "opacity-50" : ""}`}
    >
      {label && (
        <label
          className={`mb-1 font-medium ${
            darkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        <input
          type={inputType}
          value={value}
          defaultValue={value === undefined ? "" : undefined} // Fix uncontrolled issue
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          className={`w-full ${sizeClasses[size]} ${variantClasses[variant]} ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          } focus:outline-none focus:ring-2 focus:ring-red-500 transition`}
        />

        {/* Clear Button */}
        {clearable && value && !disabled && (
          <button
            type="button"
            onClick={() => onChange && onChange({ target: { value: "" } })}
            className="absolute right-10 text-gray-400 hover:text-red-500"
          >
            ✕
          </button>
        )}

        {/* Password Toggle */}
        {type === "password" && passwordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2"
          >
            <img
              src={
                showPassword
                  ? "https://cdn-icons-png.flaticon.com/512/709/709612.png" // 👁️ open eye
                  : "https://cdn-icons-png.flaticon.com/512/2767/2767146.png" // 🙈 closed eye
              }
              alt="toggle visibility"
              className="w-5 h-5"
            />
          </button>
        )}

        {disabled && (
          <div className="absolute right-2 animate-spin border-2 border-gray-400 border-t-transparent rounded-full w-4 h-4"></div>
        )}
      </div>

{/* Password Suggestion */}
{type === "password" && (
  <div className="mt-2">
    <button
      type="button"
      onClick={generatePassword}
      className="text-sm text-gray-700 hover:text-red-600 transition"
    >
            Suggest a password
    </button>
  </div>
)}


      {/* Helper & Error Messages */}
      {helperText && !invalid && (
        <span className="mt-1 text-sm text-gray-500">{helperText}</span>
      )}
      {invalid && errorMessage && (
        <span className="mt-1 text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
}
