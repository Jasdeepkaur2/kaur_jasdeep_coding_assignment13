import React from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
