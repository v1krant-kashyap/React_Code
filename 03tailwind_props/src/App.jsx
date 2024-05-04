import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let anyObj = {
    name: "Vikrant",
    age: 21,
  };

  let newArraY = [1, 5, 6, 6];

  return (
    <>
      <h1 className="bg-green-600 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card productName='HP Laptops' btnTxt='Add to cart' />
      <Card productName='Dell Laptops'  />
    </>
  );
}

export default App;
