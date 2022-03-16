import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import LoginFormModal from "./auth/LoginModal";
import SignupFormModal from "./auth/SignupModal";

const NavBar = () => {

  const sessionUser = useSelector((state) => state.session.user);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        {!sessionUser && <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            <LoginFormModal/>
          </NavLink>
        </li>}
        {!sessionUser && <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            <SignupFormModal/>
          </NavLink>
        </li>}
        {sessionUser  && <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>}
        {sessionUser  && <li>
          <NavLink to="/posts" exact={true} activeClassName="active">
            Posts
          </NavLink>
        </li>}
        {sessionUser && <li>
          <LogoutButton />
        </li>}
      </ul>
    </nav>
  );
};

export default NavBar;
