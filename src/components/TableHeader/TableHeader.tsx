import React from "react";
import "./TableHeader.css";

interface TableHeaderProps {
  children: React.ReactNode;
}

function TableHeader({ children }: TableHeaderProps) {
  return <thead>{children}</thead>;
}

export default TableHeader;
