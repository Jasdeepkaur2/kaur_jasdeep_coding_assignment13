// src/components/TableFooter/TableFooter.stories.jsx
import TableFooter from "./TableFooter";
import TableRow from "../TableRow/TableRow";
import TableCell from "../TableCell/TableCell";

export default {
  title: "Components/TableFooter",
  component: TableFooter,
};

export const Default = {
  args: {},
  render: () => (
    <table>
      <TableFooter>
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
        </TableRow>
      </TableFooter>
    </table>
  ),
};