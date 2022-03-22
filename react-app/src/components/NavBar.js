import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import CreatePostModal from "./Post/CreatePost";
import "./NavBar.css";
import { ProfileButton } from "./User/ProfileButton"
const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <nav>
      {sessionUser && (
        <ul className="navbar-main">
          <li className="navbar-name">
            <NavLink to="/" exact={true} activeClassName="active">
              InstaGame
            </NavLink>
          </li>
          <li className="create-post-modal">
            <CreatePostModal />
          </li>
          <li className="navbar-profile">
              <ProfileButton user={sessionUser} />

          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
