import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import "./Search.css";

export const SearchBar = () => {
  const currentUser = useSelector((state) => state.session.user);
  const users = Object.values(useSelector((state) => state.users));
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  let count = 0;

  return (
    <>
      <form className="search-form">
        <label className="fi-search">
          <span className="search-icon">
            <FiSearch />
          </span>
        </label>
        <input
          type="text"
          className="search-bar"
          onChange={handleSearch}
          placeholder="Search"
          value={searchTerm}
          required
        ></input>
      </form>
      <div hidden={!searchTerm} className="search-results-container">
        <ul>
          {users.map((user) => {
            if (
              user?.id !== currentUser.id &&
              user?.username.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              count++;
              return (
                <li key={user.id}>
                  <Link
                    to={`/users/${user.id}`}
                    onClick={() => setSearchTerm("")}
                  >
                    {user.username}
                  </Link>
                </li>
              );
            } else {
              return null;
            }
          })}
          {!count ? <p className="no-results"> No results found </p> : null}
        </ul>
      </div>
    </>
  );
};
