import React from "react";
import Box from "./Box";
import "./BoxList.scss";

const BoxList = ({ services }) => {
  return (
    <section className="boxes-wrapper">
      <div className="boxes">
        {services.map(service => (
          <Box
            key={service.id}
            label={service.label}
            title={service.title}
            subtitle={service.subtitle}
            icon={service.icon}
            image={service.image}
            color={service.color}
            gridArea={service.gridArea}
          />
        ))}
      </div>
    </section>
  );
};

export default BoxList;
