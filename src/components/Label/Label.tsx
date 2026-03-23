import React from "react";
import "./Label.css";

interface LabelProps {
  text: string;
}

function Label({ text }: LabelProps) {
  return <span className="label">{text}</span>;
}

export default Label;
