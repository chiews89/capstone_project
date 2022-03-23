import React from "react";
import { NavLink } from "react-router-dom";
import "./404Page.css";

export const ErrorPage = () => {
  return (
    <div className="error-image">
      <NavLink to="/" exact={true} ClassName="error-link">
        <img
          src="https://s3.envato.com/files/10065422/Extra%20Previews/02_Preview2.png"
          alt="https://cdn.dribbble.com/users/1032175/screenshots/10443661/media/fec824878513ddc5d185401b8c3da727.png?compress=1&resize=1000x750&vertical=tope"
          className="missing-page-message"
        ></img>
      </NavLink>
    </div>
  );
};
