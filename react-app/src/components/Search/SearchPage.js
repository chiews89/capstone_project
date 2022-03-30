import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const SearchPage = () => {
  const user = useSelector((state) => state.session.user);
  const users = useSelector((state) => state.users);
  const usersArr = Object.values(users);

  const search = usersArr.filter(({ username, id }) => {
    return username.toLowerCase() && id !== user?.id;
  });

  return (
    <div className="search-container">
      {search.map(({ username, id }) => (
        <Link className="search" to={`profile/${id}`} key={id}>
            <p>
                {username}
            </p>
        </Link>
      ))}
    </div>
  );
};
