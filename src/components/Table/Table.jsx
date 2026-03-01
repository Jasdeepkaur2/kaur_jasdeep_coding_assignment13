// src/components/Table/Table.jsx
import React from "react";
import "./Table.css";

function Table({ children }) {
  return <table className="table">{children}</table>;
}

export default Table;