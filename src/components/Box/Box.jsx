import React from "react";
import "./Box.scss";
import { FaChevronCircleRight } from "react-icons/fa";
import { IconContext } from "react-icons";

const Box = ({ title, subtitle, label, icon, image, color, gridArea }) => {
  return (
    <div className={`box box--${color} grid-${gridArea}`}>
      <div className="box__body">
        {label && <div className="box__label">{label}</div>}
        <h4 className="box__title">{title}</h4>
        <div className="box__subtitle">{subtitle}</div>
        {icon && (
          <div className="box__icon">
            {/* TODO: create Icon component */}
            <IconContext.Provider
              value={{ color: "#583e92", size: "1.5rem", className: icon }}
            >
              <div>
                <FaChevronCircleRight />
              </div>
            </IconContext.Provider>
          </div>
        )}
      </div>
      {image && (
        <div className="box__image">
          <img src={image} alt={`${title} ${subtitle}`} />
        </div>
      )}
    </div>
  );
};

export default Box;
