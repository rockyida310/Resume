import React from "react";
import ReactDomClient from "react-dom/client";
import SearchPhotos from "./components/SearchPhotos";


import "./index.css";


function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">React Photo Search</h1>
        <SearchPhotos/>
      </div>
    </div>
  );
}


//new way
const container = document.getElementById("root");
const root = ReactDomClient.createRoot(container);
root.render(<App/>);