import React from "react";
import LocationDisplay from "./LocationDisplay";
import './App.css';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Geolocation Example</h1>
      <LocationDisplay />
    </div>
  );
};

export default App;
