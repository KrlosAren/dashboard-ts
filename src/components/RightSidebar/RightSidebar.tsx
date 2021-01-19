import React from "react";
import Complete from "./Complete";
import Events from "./Events";
import FriendsRequest from "./FriendsRequest";

const RightSidebar = () => {
  return (
    <div className="main__rightsidebar">
      <div className="monitoring__container">
        <Complete />
        <FriendsRequest />
        <Events />
      </div>
    </div>
  );
};

export default RightSidebar;
