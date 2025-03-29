
import React from 'react';
import useWindowResize from './useWindowResize';
import './App.css';

const App = () => {
  const { width, height } = useWindowResize();  // Using the custom hook

  return (
    <div className="app">
      <h1>Window Resize Tracker</h1>
      <div className="window-size">
        <p>Current window size:</p>
        <p><strong>Width:</strong> {width}px</p>
        <p><strong>Height:</strong> {height}px</p>
      </div>
    </div>
  );
};

export default App;
