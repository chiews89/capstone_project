import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <nav>
      {sessionUser && <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" exact={true} activeClassName="active">
            Posts
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>}
    </nav>
  );
};

export default NavBar;
