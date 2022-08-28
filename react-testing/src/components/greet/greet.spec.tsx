//Greet should render the text hello and if a name is passed into the component, it should render hello followed by the name

import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

//describe.only()
//describe.skip()
//multiple describe function is also allowed
//one file is one test suite
describe("Greet", () => {
  fit("renders correctly", () => {
    render(<Greet />);
    //const textElement = screen.getByText(/hello/i);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  //test.skip() can also be used
  //describe function can also be nested
  describe("Nested", () => {
    xit("renders with name", () => {
      render(<Greet name="Kimmie" />);
      const textElement = screen.getByText("Hello Kimmie");
      expect(textElement).toBeInTheDocument();
    });
  });
});
