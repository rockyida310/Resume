import React from "react";
import ReactDomClient from "react-dom/client";

//CSS

import "./index.css";


function App() {
  return (
    <>
     <h1>Lets start</h1>
    </>
  );
}




//new way
const container = document.getElementById("root");
const root = ReactDomClient.createRoot(container);
root.render(<App/>);