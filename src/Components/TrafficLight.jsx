import React, { useState } from "react";
import Red from "./Red";
import Yellow from "./Yellow";
import Green from "./Green";
import "../App.css";

const TrafficLight = () => {
  const [light, setLight] = useState("red");

  const nextLight = () => {
    const lights = ["green", "yellow", "red"];
    const lightIndex = lights.indexOf(light);
    const nextIndex = (lightIndex + 1) % lights.length;
    setLight(lights[nextIndex]);
  };

  return (
    <div className="container_light">
      <div className="light_flex">
        <Green isActive={light === "green"} />
        <Yellow isActive={light === "yellow"} />
        <Red isActive={light === "red"} />
      </div>
      <button onClick={nextLight}>Next</button>
    </div>
  );
};

export default TrafficLight;
