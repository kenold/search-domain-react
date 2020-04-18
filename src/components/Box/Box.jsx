import React from "react";

const Box = ({ title, subtitle, label, image }) => {
  return (
    <div className="box">
      <div className="box__label">label</div>
      <h4 className="box__title">title</h4>
      <div className="box__subtitle">sub</div>
      <div className="box__icon">icon</div>
      <div className="box__image">image</div>
    </div>
  );
};

export default Box;
