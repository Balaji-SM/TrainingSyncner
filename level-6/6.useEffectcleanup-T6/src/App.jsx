import React, { useState, useEffect } from "react";
import './App.css';
const TimerComponent = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Logging message every second...");
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      console.log("Cleanup: Stopping the timer.");
      clearInterval(interval);
    };
  }, []); // Empty dependency array ensures effect runs only on mount/unmount

  return <h2>i am learning FSD (Full Stcak Developemnt)</h2>;
};

const App = () => {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Unmount Timer" : "Mount Timer"}
      </button>
      {showTimer && <TimerComponent />}
    </div>
  );
};

export default App;
