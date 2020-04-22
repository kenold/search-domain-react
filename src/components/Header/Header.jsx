import React from "react";
import "./Header.scss";
import Navbar from "../../components/Navbar/Navbar";

const Header = () => {
  return (
    <header className="main-header">
      <div className="main-header__wrapper">
        <div className="main-header__logo">
          <img
            src="https://res.cloudinary.com/dkwgkbgqq/image/upload/v1587507857/assets/dstudio-logo.png"
            alt="D-Studio"
          />
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
