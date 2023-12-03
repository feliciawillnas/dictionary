import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it } from "vitest";
import App from "../src/App";

it("should display the word 'Dictionary", () => {
  render(<App />);
  expect(screen.getByText("Dictionary")).toBeVisible();
});

it("should be possible to search for 'hello' using the input field and search button ", async () => {
  render(<App />);

  // simulate a user
  const user = userEvent.setup();

  // check that the input field is there
  const input = screen.getByPlaceholderText("Search");
  expect(input).toBeInTheDocument();

  // check that the accompanying search button is there
  const searchButton = screen.getByLabelText("search");
  expect(searchButton).toBeInTheDocument();

  // simulate user input and click on the search button
  await user.type(input, "hello");
  expect(input).toHaveValue("hello");
  await user.click(searchButton);

  await userEvent.click(searchButton);

  // wait for the API call to complete and the component to update
  // find the word "hello" in the document
  await screen.findByText("hello");

  expect(screen.getByText("hello")).toBeInTheDocument();
  // expect(screen.getByText("greeting")).toBeInTheDocument();
  expect(screen.getByText("/həˈləʊ/")).toBeInTheDocument();
  // expect(screen.getByText("1. noun")).toBeInTheDocument();
  // expect(
  //   screen.getByText('* "Hello!" or an equivalent greeting.')
  // ).toBeInTheDocument();
});
