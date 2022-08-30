import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  render(<Application />);
  const nameElement = screen.getByRole("textbox");

  expect(nameElement).toBeInTheDocument();
});
