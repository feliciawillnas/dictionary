import { useState } from "react";
import "./App.css";
import Favorites from "./components/Favorites";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavoriteList] = useState([]);

  const handleSearchResults = (data) => {
    setSearchResults(data);
  };

  const handleFavoritesResults = (data) => {
    setFavoriteList(data);
  };
  return (
    <>
      <header>
        <h1>Dictionary</h1>
        <Search onSearchResults={handleSearchResults} />
      </header>
      <main>
        <Favorites favorites={favorites} />
        <SearchResults
          onFavoritesResults={handleFavoritesResults}
          searchResults={searchResults}
        />
      </main>
    </>
  );
}

export default App;
