import React from "react";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import Navbar from "../components/Navbar/Navbar";
import "../styles/main.scss";

function App() {
  return (
    <div className="main">
      <Navbar />
      <LeftSidebar />
      <div className="main__center">center</div>
      <div className="main__rightsidebar">right</div>
    </div>
  );
}

export default App;
