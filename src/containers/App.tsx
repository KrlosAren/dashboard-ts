import React from "react";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import Main from "../components/MainCenter/Main";
import Navbar from "../components/Navbar/Navbar";
import "../styles/main.scss";

function App() {
  return (
    <div className="main">
      <Navbar />
      <LeftSidebar />
      <Main />
      <div className="main__rightsidebar">right</div>
    </div>
  );
}

export default App;
