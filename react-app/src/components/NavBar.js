import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import CreatePostModal from "./Post/CreatePost";

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <nav>
      {sessionUser && <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            InstaGame
          </NavLink>
        </li>
        <li>
          <CreatePostModal/>
        </li>
        <li>
          <NavLink to="/profile" exact={true} activeClassName="active">
            Profile
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
