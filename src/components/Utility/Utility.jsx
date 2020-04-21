import React from "react";
import "./Utility.scss";
import { FaRegBell, FaRegEnvelope } from "react-icons/fa";

const Utility = () => {
  return (
    <div className="utility">
      <div className="utility__icons">
        <div className="utility__icons-email">
          <FaRegEnvelope />
          <div className="dot" />
        </div>
        <div className="utility__icons-bell">
          <FaRegBell />
          <div className="dot" />
        </div>
      </div>
      <div className="utility__link">Logout</div>
    </div>
  );
};

export default Utility;
