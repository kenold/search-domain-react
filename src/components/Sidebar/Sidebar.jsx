import React from "react";
import User from "../../components/User/User";
import CreditCard from "../../components/CreditCard/CreditCard";

const Sidebar = () => {
  const user = {
    avatar: "http://source.unsplash.com/XAo09LtQiAQ/300x300",
    name: "Jessica Astner",
    adminRole: "Super Admin"
  };
  return (
    <aside>
      <User data={user} />
      <CreditCard />
    </aside>
  );
};

export default Sidebar;
