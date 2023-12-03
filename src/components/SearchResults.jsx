import React, { useState } from "react";
import "../css/SearchResults.css";

export default function SearchResults({ searchResults, onFavoritesResults }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorite = (favorite) => {
    setFavorites([...favorites, favorite]);
    onFavoritesResults(favorites);
    console.log(favorites);
  };

  return (
    <>
      <div className="search-results">
        <div className="search-results-wrapper">
          {/* Renders either a message encouraging the user to search for a word, or renders the result of the searched word */}
          {searchResults.length === 0 ? (
            <p>Please search for a word</p>
          ) : (
            searchResults.map((result, index) => (
              <div key={index}>
                <div className="flex title-wrapper">
                  {/* SEARCHED WORD */}
                  <h1>{result.word}</h1>

                  {index === 0 && (
                    <>
                      {/* STAR SVG */}
                      <svg
                        onClick={() => addToFavorite(result.word)}
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 21 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="m11.479 1.712 2.367 4.8a.532.532 0 0 0 .4.292l5.294.769a.534.534 0 0 1 .3.91l-3.83 3.735a.534.534 0 0 0-.154.473l.9 5.272a.535.535 0 0 1-.775.563l-4.734-2.49a.536.536 0 0 0-.5 0l-4.73 2.487a.534.534 0 0 1-.775-.563l.9-5.272a.534.534 0 0 0-.154-.473L2.158 8.48a.534.534 0 0 1 .3-.911l5.294-.77a.532.532 0 0 0 .4-.292l2.367-4.8a.534.534 0 0 1 .96.004Z"
                        />
                      </svg>
                    </>
                  )}
                </div>

                <>
                  {/* AUDIO AND PHONETICS */}
                  {result.phonetics[index] && (
                    <div className="audio-player">
                      {result.phonetics[index].audio && (
                        <p>
                          {result.phonetics[index].audio.length === 0 ? (
                            <></>
                          ) : (
                            <>
                              {/* {result.phonetics[index].audio} */}
                              {/* AUDIO SVG */}
                              <audio controls aria-label="audio-player">
                                <source
                                  src={result.phonetics[0].audio}
                                  type="audio/mpeg"
                                />
                              </audio>
                            </>
                          )}
                        </p>
                      )}
                      {result.phonetics.length > 1 && (
                        <p>{result.phonetics[1].text}</p>
                      )}
                    </div>
                  )}

                  {/* TYPE OF WORD */}
                  <div className="meaning-wrapper">
                    {result.meanings.map((meaning, meaningIndex) => (
                      <div key={meaningIndex}>
                        <h3>{meaning.partOfSpeech}</h3>
                        <div
                          style={{
                            borderBottom: "2px solid #C8C8C8",
                            display: "block",
                            marginTop: "1rem",
                            marginBottom: "1rem",
                          }}
                        ></div>

                        {/* MEANING AND EXAMPLE OF WORD */}
                        <div className="definition">
                          {meaning.definitions.map(
                            (definition, definitionIndex) => (
                              <div key={definitionIndex}>
                                <h2>{definition.definition}</h2>
                                <ul>
                                  {definition.example && (
                                    <li>{definition.example}</li>
                                  )}
                                </ul>
                              </div>
                            )
                          )}

                          {/* SYNONYMS */}
                          {meaning.synonyms.length === 0 ? (
                            <p></p>
                          ) : (
                            <div className="synonyms-wrapper">
                              {meaning.synonyms.length > 1 ? (
                                <>
                                  <h2 className="synonym-title">Synonyms:</h2>
                                  <div className="synonyms-title-span">
                                    <span>{meaning.synonyms.join(", ")}</span>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <h2 className="synonym-title">Synonym:</h2>{" "}
                                  <div className="synonyms-title-span">
                                    <span>{meaning.synonyms}</span>
                                  </div>
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
