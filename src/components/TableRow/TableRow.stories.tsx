// src/components/TableRow/TableRow.stories.jsx
import TableRow from "./TableRow";
import TableCell from "../TableCell/TableCell";

export default {
  title: "Components/TableRow",
  component: TableRow,
};

export const Default = {
  args: {},
  render: () => (
    <table>
      <tbody>
        <TableRow>
          <TableCell>Data 1</TableCell>
          <TableCell>Data 2</TableCell>
        </TableRow>
      </tbody>
    </table>
  ),
};
