import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";

export const ProfileButton = () => {
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
        <i className="fa-solid fa-circle-user"></i>
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <ul>
            <li className="order-history-li">
              <NavLink to="/profile" exact={true} className="order-history">
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
