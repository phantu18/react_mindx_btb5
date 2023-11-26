import { useState } from "react";
import "./App.css";
import TrafficLight from "./Components/TrafficLight";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <TrafficLight />
    </div>
  );
}
export default App;
