import React from "react";
import "./TableRow.css";

interface TableRowProps {
  children: React.ReactNode;
}

function TableRow({ children }: TableRowProps) {
  return <tr>{children}</tr>;
}

export default TableRow;
