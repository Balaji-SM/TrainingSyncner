import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    const successHandler = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    };

    const errorHandler = (err) => {
      setError(err.message);
    };

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);

  }, []);

  return { location, error };
};

export default useGeolocation;
