import React from "react";
import "./TableFooter.css";

interface TableFooterProps {
  children: React.ReactNode;
}

function TableFooter({ children }: TableFooterProps) {
  return <tfoot>{children}</tfoot>;
}

export default TableFooter;
