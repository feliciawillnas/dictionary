import { useState } from "react";
import "./App.css";
import Favorites from "./components/Favorites";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (data) => {
    setSearchResults(data);
  };
  return (
    <>
      <header>
        <h1>Dictionary</h1>
        <Search onSearchResults={handleSearchResults} />
      </header>
      <main>
        <Favorites />
        <SearchResults searchResults={searchResults} />
      </main>
    </>
  );
}

export default App;
