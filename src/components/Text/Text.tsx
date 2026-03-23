import React from "react";
import "./Text.css";

interface TextProps {
  content: string;
}

function Text({ content }: TextProps) {
  return <p className="text">{content}</p>;
}

export default Text;
