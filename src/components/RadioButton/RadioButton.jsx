// src/components/RadioButton/RadioButton.jsx
import React from "react";

function RadioButton({ label, name, checked, onChange }) {
  return (
    <label>
      <input type="radio" name={name} checked={checked} onChange={onChange} />{" "}
      {label}
    </label>
  );
}

export default RadioButton;
