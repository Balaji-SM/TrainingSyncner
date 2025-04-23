// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EventPlanner from "./pages/Events";
import Contact from "./pages/Contact";
import Log from "./pages/Login";
import { EventProvider } from "./context/EventContext";
import "./App.css";
import Register from "./pages/Register";


const App = () => {
  return (
    <EventProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventPlanner />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={< Log />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </EventProvider>
  );
};

export default App;
