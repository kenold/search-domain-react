import React from "react";
import Box from "./Box";

const BoxList = ({ services }) => {
  return (
    <div className="boxes">
      {services.map(service => (
        <Box
          key={service.id}
          label={service.label}
          title={service.title}
          subtitle={service.subtitle}
          icon={service.icon}
          image={service.image}
        />
      ))}
    </div>
  );
};

export default BoxList;
