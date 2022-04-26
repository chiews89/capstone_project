import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchUsers } from "../../store/search";

export const SearchBar = () => {
  const user = useSelector(state => state.session?.user)
  const users = useSelector(state => state.users)
  const results = useSelector(state => state.search?.users)
  const history = useHistory();
  const dispatch = useDispatch()
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input?.length > 0) {
      dispatch(searchUsers(setInput));
    }
  }, [dispatch,input]);


  return (
    <div className="search-bar-container">
        <input
          className="search-bar-input-text"
          type="text"
          placeholder="Search..."
          value={setInput}
          onChange={(e) => setInput(e.target.value)}
          required
        ></input>
        <button className="search-bar-button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
    </div>
  );
};
