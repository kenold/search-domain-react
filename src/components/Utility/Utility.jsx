import React from "react";
import "./Utility.scss";
import { FaRegBell, FaRegEnvelope } from "react-icons/fa";

const Utility = () => {
  return (
    <div className="utility">
      <div className="utility__icons">
        <div className="utility__icons-email">
          <a href="/">
            <FaRegEnvelope />
          </a>
          <div className="dot" />
        </div>
        <div className="utility__icons-bell">
          <a href="/">
            <FaRegBell />
          </a>
          <div className="dot" />
        </div>
      </div>
      <div className="utility__link">
        <a href="/">Logout</a>
      </div>
    </div>
  );
};

export default Utility;
