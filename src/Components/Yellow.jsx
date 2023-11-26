// components/Yellow.js
import React from "react";
import "../App.css";
const Yellow = ({ isActive }) => {
  return (
    <div className={`traffic_light yellow ${isActive ? "active" : ""}`}></div>
  );
};

export default Yellow;
