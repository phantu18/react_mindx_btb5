// components/Red.js
import React from "react";
import "../App.css";

const Red = ({ isActive }) => {
  return (
    <div className={`traffic_light red ${isActive ? "active" : ""}`}></div>
  );
};

export default Red;
