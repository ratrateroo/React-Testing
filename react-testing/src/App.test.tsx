//the anatomy of a test
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

//test(name,fn,timeout)
//name: name of the test
//fn: function that contains the expectation of the test
//timeout: number of second to timeout; default is 5 seconds
test("renders learn react link", () => {
  //render: used to create a virtual DOM of the App component using the render method from react testing library
  render(<App />);
  //screen: object that contain a method (getByText - use regex as argument) to query the virtual dom
  const linkElement = screen.getByText(/learn react/i); //case insensitive regex with word learn react, this can find the words Learn React from the a link in the App component
  //expect: expects the linkElement from the document (.toBeInTheDocument())
  expect(linkElement).toBeInTheDocument();
});

//test and expect are method from jest provided globaly by create-react-app in every test, so no need to import manually
