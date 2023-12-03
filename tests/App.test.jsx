import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it } from "vitest";
import App from "../src/App";

it("should display the word 'Dictionary", () => {
  render(<App />);

  // Check that the word 'Dictionary' is visible
  expect(screen.getByText("Dictionary")).toBeVisible();
});

it("checks if input field is empty ", async () => {
  render(<App />);
  // Simulate a user, checks for the input field and search button
  const user = userEvent.setup();
  const input = screen.getByPlaceholderText("Search");
  expect(input).toHaveValue("");
  const searchButton = screen.getByLabelText("search");

  // Simulate a user clicking the search button
  await user.click(searchButton);

  // Check that the error message is rendered
  expect(
    await screen.findByText("Please enter a valid word")
  ).toBeInTheDocument();
});

it("checks if the user input an invalid search term ", async () => {
  render(<App />);
  // Simulate a user, checks for the input field and search button
  const user = userEvent.setup();
  const input = screen.getByPlaceholderText("Search");
  const searchButton = screen.getByLabelText("search");

  // Simulate user input for an invalid search term
  await user.type(input, "abcdefgh");
  expect(input).toHaveValue("abcdefgh");

  // Simulate a user clicking the search button
  await userEvent.click(searchButton);

  // Check that the error message is rendered
  expect(
    await screen.findByText("Please enter a valid word")
  ).toBeInTheDocument();
});

it("should be possible to search for 'hello' using the input field and search button", async () => {
  render(<App />);

  // Simulate a user searching for the word 'hello' + checks for the input field and search button
  const user = userEvent.setup();
  const input = screen.getByPlaceholderText("Search");
  expect(input).toBeInTheDocument();
  const searchButton = screen.getByLabelText("search");
  expect(searchButton).toBeInTheDocument();

  // Simulate user input for the search term "hello" and click on the search button
  await user.type(input, "hello");
  expect(input).toHaveValue("hello");
  await userEvent.click(searchButton);

  // Wait for the API call to complete and the component to update
  // Checks if the word 'hello' is in the document along with its definition, phonetics, and part of speech
  await screen.findByText("hello");
  expect(screen.getByText("hello")).toBeInTheDocument();
  expect(screen.getByText("greeting")).toBeInTheDocument();
  expect(screen.getByText("/həˈləʊ/")).toBeInTheDocument();
  expect(screen.getByText("noun")).toBeInTheDocument();
  expect(
    screen.getByText('"Hello!" or an equivalent greeting.')
  ).toBeInTheDocument();
});

it("check if audio is available when searching for hello", async () => {
  render(<App />);

  // Simulate a user searching for the word 'hello' + checks for the input field and search button
  const user = userEvent.setup();
  const input = screen.getByPlaceholderText("Search");
  expect(input).toBeInTheDocument();
  const searchButton = screen.getByLabelText("search");
  expect(searchButton).toBeInTheDocument();

  // Simulate user input for the search term "hello" and click on the search button
  await user.type(input, "hello");
  expect(input).toHaveValue("hello");
  await userEvent.click(searchButton);

  // Checks if the word 'hello' is in the document along with its definition, phonetics, and part of speech
  await screen.findByText("hello");

  // Check if the audio player is in the document
  const audioPlayer = screen.getByLabelText("audio-player");
  expect(audioPlayer).toBeInTheDocument();
});
