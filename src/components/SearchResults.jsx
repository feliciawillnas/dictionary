import React, { useState } from "react";
import "../css/SearchResults.css";

export default function SearchResults({ searchResults }) {
  const [isShowingMore, setIsShowingMore] = useState(false);

  const handleToggle = () => {
    setIsShowingMore(!isShowingMore);
  };

  return (
    <>
      <div className="search-results">
        <div className="search-results-wrapper">
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
                      <svg
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

                {index === 1 && (
                  <>
                    <div className="center" onClick={handleToggle}>
                      Show more
                      <svg
                        class="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z" />
                      </svg>
                    </div>
                  </>
                )}

                {!isShowingMore ? (
                  <></>
                ) : (
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
                                {result.phonetics[index].audio}
                                <svg
                                  className="w-6 h-6 text-gray-800 dark:text-white"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 20 18"
                                >
                                  <path d="M10.836.357a1.978 1.978 0 0 0-2.138.3L3.63 5H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1.63l5.07 4.344a1.985 1.985 0 0 0 2.142.299A1.98 1.98 0 0 0 12 15.826V2.174A1.98 1.98 0 0 0 10.836.357Zm2.728 4.695a1.001 1.001 0 0 0-.29 1.385 4.887 4.887 0 0 1 0 5.126 1 1 0 0 0 1.674 1.095A6.645 6.645 0 0 0 16 9a6.65 6.65 0 0 0-1.052-3.658 1 1 0 0 0-1.384-.29Zm4.441-2.904a1 1 0 0 0-1.664 1.11A10.429 10.429 0 0 1 18 9a10.465 10.465 0 0 1-1.614 5.675 1 1 0 1 0 1.674 1.095A12.325 12.325 0 0 0 20 9a12.457 12.457 0 0 0-1.995-6.852Z" />
                                </svg>
                              </>
                            )}
                          </p>
                        )}
                        <p>{result.phonetics[index].text}</p>
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
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
