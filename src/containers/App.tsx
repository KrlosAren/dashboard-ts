import React from "react";
import Navbar from "../components/Navbar";
import "../styles/main.scss";

function App() {
  return (
    <div className="main">
      <Navbar />
      <div className="main__leftsidebar">left</div>
      <div className="main__center">center</div>
      <div className="main__rightsidebar">right</div>
    </div>
  );
}

export default App;
