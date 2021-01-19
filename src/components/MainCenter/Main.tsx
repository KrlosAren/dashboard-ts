import React from "react";
import News from "./News";
import Timeline from "./Timeline";

const Main = () => {
  return (
    <div className="main__center">
      <div className="main__container">
        <News />
        <Timeline />
      </div>
    </div>
  );
};

export default Main;
