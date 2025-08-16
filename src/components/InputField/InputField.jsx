import React, { useState } from "react";

export default function InputField({
  value = "",
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

  return (
    <div className={`flex flex-col w-full mb-4 ${disabled ? "opacity-50" : ""}`}>
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
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          className={`w-full ${sizeClasses[size]} ${variantClasses[variant]} ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          } focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
        />

        {/* Clear Button */}
        {clearable && value && !disabled && (
          <button
            type="button"
            onClick={() => onChange({ target: { value: "" } })}
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
            className="absolute right-2 text-sm text-blue-500 hover:text-blue-700"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}

        {/* Loading Spinner */}
        {disabled && (
          <div className="absolute right-2 animate-spin border-2 border-gray-400 border-t-transparent rounded-full w-4 h-4"></div>
        )}
      </div>

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
