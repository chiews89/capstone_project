import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const SearchBar = () => {
  const users = Object.values(useSelector((state) => state.users));
  const [searchTerm, setSearchTerm] = useState("");



  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };


  let count = 0

  return (
    <div className="nnb-search-container">
      <form className="search-form">
        <div className="icon-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            className="search-bar"
            onChange={handleSearch}
            placeholder="Search"
            required
          ></input>
        </div>
      </form>
        <div  hidden = {!searchTerm}className="search-result-container">
          <ul>
            {users.map((user) => {
              if (user?.username.toLowerCase().includes(searchTerm.toLowerCase())) {
                count++
                return (
                  <li key={user.id}>
                    <NavLink to={`/users/${user.id}`}
                    onClick={() => setSearchTerm('')}>
                      {user.username}
                    </NavLink>
                  </li>
                )} else {
                  return null

              }
            })}
            {!count ? <li> No results found </li> : null}
          </ul>
        </div>
    </div>
  );
};
