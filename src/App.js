import React from "react";
import "./styles.scss";
import "./breakpoint.scss";
import Header from "./components/Header/Header";
import Teaser from "./components/Teaser/Teaser";
import Search from "./components/Search/Search";
import BoxList from "./components/Box/BoxList";
import { services } from "./data/services";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <main className="main-content">
        <div className="container">
          <Header />
          <Teaser />
          <Search />
          <p className="txt-accent">Transfer a domain you already own</p>
          <BoxList services={services} />
        </div>
        <Footer />
      </main>
    </div>
  );
}
