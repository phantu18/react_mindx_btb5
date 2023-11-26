// components/Red.js
import React from "react";
import "../App.css";

const Red = ({ isActive }) => {
  return <div className={`light red ${isActive ? "active" : ""}`}></div>;
};

export default Red;
