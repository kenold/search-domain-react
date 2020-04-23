import React, { useState } from "react";
import User from "../../components/User/User";
import CreditCardList from "../../components/CreditCard/CreditCardList";
import Utility from "../Utility/Utility";
import "./Sidebar.scss";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  const user = {
    avatar: "http://source.unsplash.com/XAo09LtQiAQ/300x300",
    name: "Jessica Astner",
    adminRole: "Super Admin"
  };
  const [isOpen, setIsOpen] = useState(false);
  function toggleSidebar() {
    setIsOpen(!isOpen);
  }
  return (
    <aside className="sidebar">
      <div className="sidebar__toggle-icon">
        <button onClick={toggleSidebar}>
          <FaUserCircle />
        </button>
      </div>
      <div className={`sidebar__content ${isOpen ? "open" : "close"}`}>
        <Utility />
        <User user={user} />
        <CreditCardList />
      </div>
    </aside>
  );
};

export default Sidebar;
