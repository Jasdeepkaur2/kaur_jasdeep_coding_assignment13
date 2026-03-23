// src/components/Button/Button.jsx
import React from "react";
import "./Button.css";

function Button({ label, onClick, disabled }) {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
