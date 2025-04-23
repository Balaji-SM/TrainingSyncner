/*import React, { useState, useContext } from "react";
import { EventContext } from "../context/EventContext";

const EventForm = () => {
  const { addEvent } = useContext(EventContext);
  const [event, setEvent] = useState({ name: "", date: "", location: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(event);
    setEvent({ name: "", date: "", location: "" });
  };

  return (
    <form onSubmt={handleSubmit}>
      <input
        type="text"
        placeholder="Event Name"
        value={event.name}
        onChange={(e) => setEvent({ ...event, name: e.target.value })}
      />
      <input
        type="date"
        value={event.date}
        onChange={(e) => setEvent({ ...event, date: e.target.value })}
      />
      <input
        type="text"
        placeholder="Location"
        value={event.location}
        onChange={(e) => setEvent({ ...event, location: e.target.value })}
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;*/