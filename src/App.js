import React from "react";
import Mainbar from "./components/Mainbar";
import Hero from "./components/Hero";
import "./styles/main.css";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Mainbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
