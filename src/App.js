import React from "react";
import "./styles.css";
import BoxList from "./components/Box/BoxList";

const services = [
  {
    id: 1,
    label: "",
    title: "VPS",
    subtitle: "$30 / Month",
    icon: "",
    image: "",
    color: "#fef4da"
  },
  {
    id: 2,
    label: "",
    title: "Security",
    subtitle: "$40.60 / 1st Year",
    icon: "",
    image: "",
    color: "#eec2ff"
  }
];
export default function App() {
  return (
    <div className="container">
      <BoxList services={services} />
    </div>
  );
}
