import React from "react";
import "./Table.css";

interface TableProps {
  children: React.ReactNode;
}

function Table({ children }: TableProps) {
  return <table className="table">{children}</table>;
}

export default Table;
