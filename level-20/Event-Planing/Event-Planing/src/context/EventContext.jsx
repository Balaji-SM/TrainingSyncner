import React, { createContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, { id: events.length + 1, ...event }]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};