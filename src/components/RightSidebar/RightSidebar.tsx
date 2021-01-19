import React from "react";
import Complete from "./Complete";
import Events from "./Events";
import FriendsRequest from "./FriendsRequest";

const RightSidebar = () => {
  return (
    <div className="main__rightsidebar">
      <Complete />
      <FriendsRequest />
      <Events />
    </div>
  );
};

export default RightSidebar;
