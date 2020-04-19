import React from "react";
import "./styles.css";
import BoxList from "./components/Box/BoxList";
import { services } from "./data";

export default function App() {
  return (
    <div className="container">
      <BoxList services={services} />
    </div>
  );
}
