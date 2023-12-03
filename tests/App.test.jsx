import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it } from "vitest";
import App from "../src/App";

it("should display the word 'Dictionary", () => {
  render(<App />);
  expect(screen.getByText("Dictionary")).toBeVisible();
});

it("checks if input field is empty ", async () => {
  render(<App />);
  const user = userEvent.setup();

  const input = screen.getByPlaceholderText("Search");
  expect(input).toBeInTheDocument();

  const searchButton = screen.getByLabelText("search");
  expect(searchButton).toBeInTheDocument();

  await userEvent.click(searchButton);

  expect(
    await screen.findByText("Please enter a valid word")
  ).toBeInTheDocument();
});

it("checks if the user input an invalid search term ", async () => {
  render(<App />);
  const user = userEvent.setup();

  const input = screen.getByPlaceholderText("Search");
  expect(input).toBeInTheDocument();

  const searchButton = screen.getByLabelText("search");
  expect(searchButton).toBeInTheDocument();

  await userEvent.click(searchButton);

  await user.type(input, "abcdefgh");
  expect(input).toHaveValue("abcdefgh");
  await userEvent.click(searchButton);

  expect(
    await screen.findByText("Please enter a valid word")
  ).toBeInTheDocument();
});

it("should be possible to search for 'hello' using the input field and search button", async () => {
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

  await userEvent.click(searchButton);

  // wait for the API call to complete and the component to update
  // checks if the word 'hello' is in the document along with its definition, phonetics, and part of speech
  await screen.findByText("hello");
  expect(screen.getByText("hello")).toBeInTheDocument();
  expect(screen.getByText("greeting")).toBeInTheDocument();
  expect(screen.getByText("/həˈləʊ/")).toBeInTheDocument();
  expect(screen.getByText("noun")).toBeInTheDocument();
  expect(
    screen.getByText('"Hello!" or an equivalent greeting.')
  ).toBeInTheDocument();
});
