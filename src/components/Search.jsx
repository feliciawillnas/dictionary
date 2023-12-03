import React, { useState } from "react";
import "../css/Search.css";
function Search({ onSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [errorStatus, setErrorStatus] = useState("");

  // handleSearch is called when the user clicks the search button.
  // It checks if the input field is empty. If it is, it displays an error message.
  // If it is not, it calls handleInputChange.
  const handleSearch = () => {
    if (searchTerm === "") {
      handleError("Please enter a valid word");
    } else {
      handleInputChange();
      clearInput();
    }
  };

  // Clears the input field and hides the error message.
  const clearInput = () => {
    setSearchTerm("");
    setIsErrorVisible(false);
  };

  // handleInputChange is called when the user clicks the search button. And handles the API call.
  const handleInputChange = async () => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
      );

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
        onSearchResults(data);
        clearInput();
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      handleError(error);
    }
  };

  // handleError is called when the API call fails.
  const handleError = (error) => {
    if (error.message === "Something went wrong") {
      setErrorStatus(
        "Error fetching word definitions. Please try again later."
      );
    } else if (error.response && error.response.status === 404) {
      setErrorStatus(`No definitions found for '${searchTerm}'.`);
    } else {
      setErrorStatus("An unexpected error occurred. Please try again later.");
    }

    setIsErrorVisible(true);
    console.error("Error:", error.message);
  };

  return (
    <>
      <div className="input-container-error-message">
        <div className="input-container">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            type="text"
          />
          <button
            onClick={handleSearch}
            className="search-button"
            aria-label="search"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white svg-search"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
        {isErrorVisible && (
          <div className="error-message">Please enter a valid word</div>
        )}
      </div>
    </>
  );
}

export default Search;
