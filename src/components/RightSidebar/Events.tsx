import React, { useContext } from "react";
import Event from "./Event";
import AppContext from "../../context/AppContext";
import { EventsProps } from "../../interfaces";

const Events = () => {
  const { state } = useContext(AppContext);
  const { events } = state;

  return (
    <div className="event__container">
      <h2>Events</h2>
      {events.map((event: EventsProps) => (
        <Event event={event} key={event.id} />
      ))}
    </div>
  );
};

export default Events;
