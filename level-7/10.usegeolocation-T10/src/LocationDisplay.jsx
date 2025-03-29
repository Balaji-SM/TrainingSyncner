import React from "react";
import useGeolocation from "./useGeolocation";

const LocationDisplay = () => {
  const { location, error } = useGeolocation();

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
      <h2>Your Current Location</h2>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {location ? (
        <p>
          Latitude: {location.latitude} <br />
          Longitude: {location.longitude}
        </p>
      ) : (
        !error && <p>Fetching location...</p>
      )}
    </div>
  );
};

export default LocationDisplay;
