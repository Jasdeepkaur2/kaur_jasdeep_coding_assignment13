import React from "react";
import "./Dropdown.css";

interface DropdownProps {
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Dropdown({ options, onChange }: DropdownProps) {
  return (
    <select className="dropdown" onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
