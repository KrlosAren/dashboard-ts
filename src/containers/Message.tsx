import React from "react";

const Message = () => {
  return (
    <div className="timeline__msg">
      <div className="message__card">
        <img src="https://dummyimage.com/600x600/ebd3eb/fff" alt="user img" />
        <input type="text" name="msg" placeholder="Type something..." />
        <i className="fas fa-search"></i>
        <i className="fas fa-paperclip"></i>
      </div>
      <div className="message__details">
        <label htmlFor="visible" className="checkbox">
          <input type="checkbox" name="visible" id="visible" />
          <span></span>
          visible
        </label>
        <button type="submit" className="button-secondary">
          Public
        </button>
        <button type="submit" className="button-secondary">
          Channel
        </button>
        <button type="submit" className="button-icon">
          <i className="fas fa-map-marker-alt"></i>
        </button>
        <button type="submit" className="send__message">
          <i className="fas fa-location-arrow"></i>
        </button>
      </div>
    </div>
  );
};

export default Message;
