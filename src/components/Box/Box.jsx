import React from "react";
import "./Box.scss";

const Box = ({ title, subtitle, label, image }) => {
  return (
    <div className="box">
      <div className="box__label">Pro User</div>
      <h4 className="box__title">VPS</h4>
      <div className="box__subtitle">$30 / Month</div>
      <div className="box__icon">icon</div>
      <img src="" className="box__image" alt="" />
    </div>
  );
};

export default Box;
