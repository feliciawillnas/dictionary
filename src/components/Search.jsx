import React, { useState } from "react";
import "../css/Search.css";

function Search({ onSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (searchTerm === "") {
      handleError();
    } else {
      handleInputChange();
      clearInput();
    }
  };

  const clearInput = () => {
    setSearchTerm("");
  };

  const handleInputChange = async () => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
      );
      const data = await response.json();

      setSearchResults(data);
      onSearchResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleError = () => {
    console.log("Error");
  };

  return (
    <>
      <div className="input-container">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          type="text"
        />
        <button onClick={handleSearch} className="search-button">
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
    </>
  );
}

export default Search;
