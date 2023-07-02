import React from "react";

const SearchBar = ({ query, change, setPage }) => {
  return (
    <div className="search">
      <input type="text" value={query} onChange={change} />
      <button
        onClick={() => {
          setPage(`quotes/search?term=${query}`);
        }}
      >
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
