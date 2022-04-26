import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";

export const ProfileButton = () => {
  const user = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <>
      <button className="user-icon-button" onClick={openMenu}>
        <span className="circle-user-button">
          <i className="fa-solid fa-circle-user"></i>
        </span>
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <ul>
            <li className="profile-button-li">
              <NavLink to={`/users/${user.id}`} exact={true} className="profile-button">
                Profile
              </NavLink>
            </li>
            <li className="logout-li">
              <LogoutButton />
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
