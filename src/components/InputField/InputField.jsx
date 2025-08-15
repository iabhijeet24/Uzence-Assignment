import React from "react";

export default function InputField({ label, placeholder }) {
  return (
    <div>
      {label && <label>{label}</label>}
      <input placeholder={placeholder} />
    </div>
  );
}
