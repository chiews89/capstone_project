import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import CreatePostModal from "./Post/CreatePost";
import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <nav>
      {sessionUser &&
      <div className="navbar-main">
        <div className="navbar-name">
          <NavLink to="/" exact={true} activeClassName="active">
            InstaGame
          </NavLink>
        </div>
        <div className="create-post-modal">
          <CreatePostModal/>
        </div>
        <div className="navbar-profile">
          <NavLink to="/profile" exact={true} activeClassName="active">
            Profile
          </NavLink>
        </div>
        <div className="navbar-logout">
          <LogoutButton />
        </div>
      </div>}
    </nav>
  );
};

export default NavBar;
