import React from "react";
import "./TableCell.css";

interface TableCellProps {
  children: React.ReactNode;
}

function TableCell({ children }: TableCellProps) {
  return (
    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{children}</td>
  );
}

export default TableCell;
