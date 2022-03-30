import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const SearchBar = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/profile/:id`);
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSearch}>
        <input
          className="search-bar-input-text"
          type="text"
          placeholder="Search...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
        ></input>

        <button className="search-bar-button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};
