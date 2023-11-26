import React, { useState } from "react";
import Red from "./Red";
import Yellow from "./Yellow";
import Green from "./Green";
import "../App.css";

const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState("red");

  const nextLight = () => {
    const lights = ["green", "yellow", "red"];
    const currentIndex = lights.indexOf(currentLight);
    const nextIndex = (currentIndex + 1) % lights.length;
    setCurrentLight(lights[nextIndex]);
  };

  return (
    <div className="container_traffic_light">
      <div className="traffic_light_flex">
        <Green isActive={currentLight === "green"} />
        <Yellow isActive={currentLight === "yellow"} />
        <Red isActive={currentLight === "red"} />
      </div>
      <button onClick={nextLight}>Next</button>
    </div>
  );
};

export default TrafficLight;
