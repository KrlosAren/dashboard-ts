import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const Message = () => {
  const { state } = useContext(AppContext);
  const { profile } = state;

  return (
    <div className="timeline__msg">
      <div className="message__card">
        <img src={profile.img} alt={profile.name} />
        <input type="text" name="msg" placeholder="Type something..." />
        <i className="fas fa-search"></i>
        <i className="fas fa-paperclip"></i>
      </div>
      <div className="message__details">
        <div className="details__options">
          <div className="checkbox">
            <input type="checkbox" name="check" id="check" />
            <label htmlFor="check"></label>
          </div>
          <button type="submit" className="button-secondary">
            Public
            <i className="fas fa-sort-down"></i>
          </button>
          <button type="submit" className="button-secondary">
            Channel
            <i className="fas fa-sort-down"></i>
          </button>
        </div>
        <div className="details__send">
          <button type="submit" className="button-icon">
            <i className="fas fa-map-marker-alt"></i>
          </button>
          <button type="submit" className="send__message">
            <i className="fas fa-location-arrow"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
