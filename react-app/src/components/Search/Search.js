import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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
        <label>
          <i className="fas fa-search"></i>
        </label>
        <input
          type="text"
          className="search-bar"
          onChange={handleSearch}
          placeholder="Search"
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
                  <NavLink
                    to={`/users/${user.id}`}
                    onClick={() => setSearchTerm("")}
                  >
                    {user.username}
                  </NavLink>
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
