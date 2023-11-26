import "../css/Search.css";

export default function Search() {
  return (
    <>
      <div className="input-container">
        <input placeholder="Search" type="text" />
        <button className="search-button">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white svg-search"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
