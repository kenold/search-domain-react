import React from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.scss";

const Nav = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav__toggle">
        <a href="/">
          <FaBars />
        </a>
      </div>
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <a href="/">Features</a>
        </li>
        <li className="main-nav__item">
          <a href="/">Account</a>
        </li>
        <li className="main-nav__item">
          <a href="/">Settings</a>
        </li>
        <li className="main-nav__item">
          <a href="/">My Domains</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
