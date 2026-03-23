import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders UI component library heading", () => {
  render(<App />);
  const heading = screen.getByText(/Jasdeep Kaur - UI Component Library/i);
  expect(heading).toBeInTheDocument();
});
