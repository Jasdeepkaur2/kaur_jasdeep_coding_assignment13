// src/components/Table/Table.stories.jsx
import Table from "./Table";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";
import TableCell from "../TableCell/TableCell";

export default {
  title: "Components/Table",
  component: Table,
};

export const Default = {
  args: {},
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Data 1</TableCell>
          <TableCell>Data 2</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
};
