import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import CreatePostModal from "./Post/CreatePost";
import "./NavBar.css";
import { ProfileButton } from "./User/ProfileButton";
const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <nav className="navbar-container">
      {sessionUser && (
        <ul className="navbar-main">
          <div className="nav-bar-content">
            <li className="navbar-name">
              <NavLink to="/" exact={true} activeClassName="active">
                <img
                  className="site-logo"
                  src="/static/Instagame-Logo.png"
                  alt="/static/Instagame-Logo.png"
                />
              </NavLink>
            </li>
            <li className="home-button-icon">
              <NavLink to="/" exact={true} activeClassName="active">
                <i className="user-icon" class="fa-solid fa-house"></i>
              </NavLink>
            </li>
            <li className="create-post-modal">
              <CreatePostModal />
            </li>
            <li className="navbar-profile">
              <ProfileButton user={sessionUser} />
            </li>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
