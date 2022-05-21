import React, { useState } from "react";
import ReactDomClient from "react-dom/client";

import "./index.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const HandleIncrease = () => {
    setCounter(counter + 1);
  };

  const HandleDecrease = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div className="container">
        <div className="counter">counterValue = {counter}</div>
        <div className="buttons">
          <button className="btn" id="btnIncrease" onClick={HandleIncrease}>
            Increase
          </button>
          <button className="btn" id="btnDecrease" onClick={HandleDecrease}>
            Decrease
          </button>
        </div>
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDomClient.createRoot(container);
root.render(<App />);
