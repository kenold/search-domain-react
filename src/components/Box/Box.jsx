import React from "react";
import "./Box.scss";

const Box = ({ title, subtitle, label, icon, image }) => {
  return (
    <div className="box">
      {label && <div className="box__label">{label}</div>}
      <h4 className="box__title">{title}</h4>
      <div className="box__subtitle">{subtitle}</div>
      {icon && <div className="box__icon">{icon}</div>}
      {image && (
        <img src="" className="box__image" alt={`${title} ${subtitle}`} />
      )}
    </div>
  );
};

export default Box;
