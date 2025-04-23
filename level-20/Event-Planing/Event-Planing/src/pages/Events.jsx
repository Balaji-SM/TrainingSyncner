import React, { useState, useEffect } from "react";
import axios from "axios";
import './home.css';

const EventPlanner = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    location: "",
    details: "",
  });
  const [editingId, setEditingId] = useState(null);

  // Fetch events from backend
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events");
      setEvents(res.data);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdateEvent = async () => {
    if (!newEvent.name || !newEvent.date || !newEvent.location) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      if (editingId) {
        // Update existing event
        await axios.put(`http://localhost:5000/api/events/${editingId}`, newEvent);
      } else {
        // Add new event
        await axios.post("http://localhost:5000/api/events", newEvent);
      }

      setNewEvent({ name: "", date: "", location: "", details: "" });
      setEditingId(null);
      fetchEvents();
    } catch (err) {
      console.error("Error saving event:", err);
      alert("Failed to save event.");
    }
  };

  const handleEditEvent = (event) => {
    setNewEvent({
      name: event.name,
      date: event.date,
      location: event.location,
      details: event.details,
    });
    setEditingId(event._id);
  };

  const handleDeleteEvent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      fetchEvents();
    } catch (err) {
      console.error("Error deleting event:", err);
    }
  };

  return (
    <div className="event">
      <h2>Task Managing App</h2>

      <div className="input">
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={newEvent.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newEvent.location}
          onChange={handleChange}
          required
        />
        <textarea
          name="details"
          placeholder="Event Details"
          value={newEvent.details}
          onChange={handleChange}
        />
        <button onClick={handleAddOrUpdateEvent}>
          {editingId ? "Update Event" : "ADD Task"}
        </button>
      </div>

      <ul>
        {events.map((event) => (
          <li
            key={event._id}
            style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}
          >
            <h3>{event.name}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Details:</strong> {event.details}</p>
            <button style={{marginBottom:"20px",marginTop:"10px"}} onClick={() => handleEditEvent(event)}>Edit</button>
            <button style={{marginBottom:"20px"}} onClick={() => handleDeleteEvent(event._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventPlanner;
