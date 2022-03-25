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
    <nav className="navbar-main-container">
      <div className="navbar-container">
        {sessionUser && (
          <div className="navbar-content">
            <div className="navbar-name">
              <NavLink to="/" exact={true} activeClassName="active">
                <img
                  className="site-logo"
                  src="/static/Instagame-Logo.png"
                  alt="/static/Instagame-Logo.png"
                />
              </NavLink>
            </div>
            <div className="home-button-icon">
              <NavLink to="/" exact={true} activeClassName="active">
                <div className="navbar-profile-button">
                  <i class="fa-solid fa-house"></i>
                </div>
              </NavLink>
            </div>
            <div className="create-post-modal">
              <CreatePostModal />
            </div>
            <div className="navbar-profile">
              <ProfileButton user={sessionUser} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
