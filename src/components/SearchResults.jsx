import "../css/SearchResults.css";

export default function SearchResults() {
  return (
    <>
      <div className="search-results">
        <div style={{ padding: "3rem 3rem 2rem 3rem" }}>
          <div className="flex word-title-svg-wrapper">
            <h1 style={{ fontWeight: "bold" }}>Word</h1>
            <div className="svg-wrapper">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="m11.479 1.712 2.367 4.8a.532.532 0 0 0 .4.292l5.294.769a.534.534 0 0 1 .3.91l-3.83 3.735a.534.534 0 0 0-.154.473l.9 5.272a.535.535 0 0 1-.775.563l-4.734-2.49a.536.536 0 0 0-.5 0l-4.73 2.487a.534.534 0 0 1-.775-.563l.9-5.272a.534.534 0 0 0-.154-.473L2.158 8.48a.534.534 0 0 1 .3-.911l5.294-.77a.532.532 0 0 0 .4-.292l2.367-4.8a.534.534 0 0 1 .96.004Z"
                />
              </svg>
            </div>
          </div>
          <h4>Type</h4>
          <h3>Pronounciation word word</h3>
        </div>
        <div
          style={{ borderBottom: "1px solid #C8C8C8", display: "block" }}
        ></div>
        <div style={{ padding: "2rem 3rem 3rem 3rem" }}>
          <h2>Description</h2>
          <h2>
            <li>Description</li>
          </h2>
        </div>
      </div>
    </>
  );
}
