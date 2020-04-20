import React from "react";
import "./User.scss";

const User = ({ data }) => {
  const { avatar, name, adminRole } = data;
  return (
    <section className="user-wrapper">
      <div className="user">
        <div className="user__avatar">
          <img src={avatar} alt={name} />
        </div>
        <div className="user__name">{name}</div>
        <div className="user__role">{adminRole}</div>
      </div>
    </section>
  );
};

export default User;
