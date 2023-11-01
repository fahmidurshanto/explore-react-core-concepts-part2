import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Counter";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>React core concepts part 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
    </>
  );
}

export default App;
