// components/Green.js
import React from "react";
import "../App.css";

const Green = ({ isActive }) => {
  return (
    <div className={`traffic_light green ${isActive ? "active" : ""}`}></div>
  );
};

export default Green;
