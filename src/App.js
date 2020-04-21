import React from "react";
import "./styles.scss";
import "./breakpoint.scss";
import Teaser from "./components/Teaser/Teaser";
import Search from "./components/Search/Search";
import BoxList from "./components/Box/BoxList";
import { services } from "./data/services";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <main className="main-content">
        <Teaser />
        <Search />
        <p className="txt-accent">Transfer a domain you already own</p>
        <BoxList services={services} />
      </main>
    </div>
  );
}
