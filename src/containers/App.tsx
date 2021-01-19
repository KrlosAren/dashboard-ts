import React from "react";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import Main from "../components/MainCenter/Main";
import Navbar from "../components/Navbar/Navbar";
import RightSidebar from "../components/RightSidebar/RightSidebar";
import "../styles/main.scss";

function App() {
  return (
    <div className="main">
      <Navbar />
      <LeftSidebar />
      <Main />
      <RightSidebar />
    </div>
  );
}

export default App;
