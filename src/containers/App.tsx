import React from "react";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import Main from "../components/MainCenter/Main";
import Navbar from "../components/Navbar/Navbar";
import RightSidebar from "../components/RightSidebar/RightSidebar";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import "../styles/main.scss";

function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <div className="main">
        <Navbar />
        <LeftSidebar />
        <Main />
        <RightSidebar />
      </div>
    </AppContext.Provider>
  );
}

export default App;
