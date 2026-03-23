import React from "react";
import "./RadioButton.css";

interface RadioButtonProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: () => void;
}

function RadioButton({ label, name, checked, onChange }: RadioButtonProps) {
  return (
    <label>
      <input type="radio" name={name} checked={checked} onChange={onChange} />{" "}
      {label}
    </label>
  );
}

export default RadioButton;
