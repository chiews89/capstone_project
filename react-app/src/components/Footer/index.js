import React from "react";

import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
    <ul className="footer-created-with">
        <li className="created-with">Javasctipt</li>
        <li className="created-with">Python</li>
        <li className="created-with">Flask</li>
        <li className="created-with">React</li>
        <li className="created-with">Redux</li>
        <li className="created-with">SQLAlchemy</li>
        <li className="created-with">PostgreSQL</li>
    </ul>
    <div className="footer-created-by">
        <p className="footer-owner">Chiew Saetern</p>
        <a className="github-icon" href="https://github.com/chiews89"><i className="fab fa-github-square"></i></a>
        <a className="linkedin-icon" href="https://www.linkedin.com/in/chiew-saetern-7a255b95/"><i className="fab fa-linkedin"></i></a>
    </div>
  </div>
  );
};
