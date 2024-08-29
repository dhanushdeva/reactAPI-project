import React from "react";
import "./styles/Search.css";

function Search({ query, setQuery, handleSearch }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search for movies..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
