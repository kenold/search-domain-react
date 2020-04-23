import React from "react";
import User from "../../components/User/User";
import CreditCardList from "../../components/CreditCard/CreditCardList";
import Utility from "../Utility/Utility";

const Sidebar = () => {
  const user = {
    avatar: "http://source.unsplash.com/XAo09LtQiAQ/300x300",
    name: "Jessica Astner",
    adminRole: "Super Admin"
  };
  return (
    <aside className="sidebar">
      <Utility />
      <User user={user} />
      <CreditCardList />
    </aside>
  );
};

export default Sidebar;
