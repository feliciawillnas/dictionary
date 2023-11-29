import React from "react";
import "../css/SearchResults.css";

export default function SearchResults({ searchResults }) {
  return (
    <>
      <div className="search-results">
        <div style={{ padding: "3rem 3rem 2rem 3rem" }}>
          {searchResults.length === 0 ? (
            <div>
              <p>Please search for a word</p>
            </div>
          ) : (
            searchResults.map((result, index) => (
              <div key={index}>
                <div className="flex word-title-svg-wrapper">
                  <h1 style={{ fontWeight: "bold" }}>{result.word}</h1>
                  <div className="svg-wrapper">
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
                  </div>
                </div>
                <div>
                  <h4>
                    <p>{result.meanings[0].partOfSpeech}</p>
                    {result.phonetics[1].text}
                  </h4>
                </div>
                <div
                  style={{
                    borderBottom: "1px solid #C8C8C8",
                    display: "block",
                  }}
                ></div>
                <h2>{result.phonetics[0].audio}</h2>

                <audio>
                  <source
                    src={result.phonetics[0].audio}
                    type="audio/ogg"
                  ></source>
                  Your browser does not support the audio element.
                </audio>
                <h2>{result.meanings[0].definitions[0].definition}</h2>
                <ul>
                  <li>{result.meanings[0].example}</li>
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
