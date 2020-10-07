import React from "react";
import Mainbar from "./components/Mainbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./styles/main.css";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Mainbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default App;
