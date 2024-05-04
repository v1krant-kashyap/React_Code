import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);
  // let counter = 15;

  const increaseValue = () => {
    if (counter < 20) {
      // counter = counter + 1;
      setCounter(counter + 1);
      console.log(`Current Counter Value is: ${counter}`);
    } else {
      console.log(`Counter value can't be increase above 20`);
    }
  };

  const decreaseValue = () => {
    if (counter > 0) {
      // counter = counter - 1;
      setCounter(counter - 1);
      console.log(`Current Counter Value is: ${counter}`);
    } else {
      console.log(`Counter value can't be decreased below 0`);
    }
  };

  return (
    <>
      <h1>Vik Aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={increaseValue}>Increase Value</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
