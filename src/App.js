import React from "react";
import "./styles.scss";
import "./breakpoint.scss";
import Teaser from "./components/Teaser/Teaser";
import Search from "./components/Search/Search";
import BoxList from "./components/Box/BoxList";
import CreditCard from "./components/CreditCard/CreditCard";
import User from "./components/User/User";
import { services } from "./data";

export default function App() {
  const user = {
    avatar: "http://source.unsplash.com/XAo09LtQiAQ/300x300",
    name: "Jessica Astner",
    adminRole: "Super Admin"
  };
  return (
    <div className="container">
      <User data={user} />
      <CreditCard />
      <Teaser />
      <Search />
      <p className="txt-accent">Transfer a domain you already own</p>
      <BoxList services={services} />
    </div>
  );
}
