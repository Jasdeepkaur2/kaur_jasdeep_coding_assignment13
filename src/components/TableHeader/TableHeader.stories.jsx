// src/components/TableHeader/TableHeader.stories.jsx
import TableHeader from "./TableHeader";
import TableRow from "../TableRow/TableRow";
import TableCell from "../TableCell/TableCell";

export default {
  title: "Components/TableHeader",
  component: TableHeader,
};

export const Default = {
  args: {},
  render: () => (
    <TableHeader>
      <TableRow>
        <TableCell>Header 1</TableCell>
        <TableCell>Header 2</TableCell>
      </TableRow>
    </TableHeader>
  ),
};
