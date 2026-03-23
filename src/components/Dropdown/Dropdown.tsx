// src/components/Dropdown/Dropdown.jsx
import React from "react";
import "./Dropdown.css";

function Dropdown({ options, onChange }) {
  return (
    <select className="dropdown" onChange={onChange}>
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
