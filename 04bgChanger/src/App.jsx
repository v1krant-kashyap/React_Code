import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("cyan");

  const colorsArray = [
    "red",
    "green",
    "blue",
    "olive",
    "yellow",
    "pink",
    "purple",
    "lavender",
    "white",
    "black",
  ];


  const changeBackgroundColor = (colorName) => {
    console.log("oooo", colorName);
    setBackgroundColor(colorName);
  };

  // console.log("uiuiuiu", backgroundColor);
  return (
    <>
      <div style={{ backgroundColor: backgroundColor, flex: 1 }}>
        {colorsArray.map((item, index) => {
          return (
            <div
              key={item}
              style={{
                display: "flex",

                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: backgroundColor,
              }}
            >
              <button
                onClick={() => changeBackgroundColor(item)}
                style={{ backgroundColor: item }}
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
