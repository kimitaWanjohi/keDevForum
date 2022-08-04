import React from "react";
import "./App.css";
import Navbar from "./apps/nav";
import Home from "./apps/home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="componets">
        <Home />
      </div>
    </div>
  );
}

export default App;
