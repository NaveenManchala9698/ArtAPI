import { useState } from "react";
import "../css/SearchBar.css";

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  return (
    <div className="search-container d-flex">
      <input
        className="search-input"
        /* onClick={() => onInputClick(false)} */
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        type="text"
        placeholder="Please type in your search"
      />
      <div>
        <button className="search-button">
          <b>Search</b>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
