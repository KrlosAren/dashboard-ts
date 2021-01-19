import React from "react";
import Message from "../../containers/Message";

const Timeline = () => {
  return (
    <div className="timeline">
      <h3>
        <i className="far fa-flag"></i>
        Timeline
      </h3>
      <Message />
      <div className="timeline__card">msg</div>
      <div className="timeline__stats">stats</div>
    </div>
  );
};

export default Timeline;
