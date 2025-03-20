import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react";

/*const ColorBox = ({ color }) => {
  // Inline styles with dynamic background color
  const boxStyle = {
    width: "200px",
    height: "100px",
    backgroundColor: color || "gray", // Default color if no prop is provided
    border: "1px solid black",
    textAlign: "center",
    lineHeight: "100px",
    fontWeight: "bold",
    color: "white",
  };

  return <div style={boxStyle}>Dynamic Color Box</div>;
};*/

const ColorBox=({color}) => {
  const boxstyle ={ 
    width: "200px",
    height: "100px",
    backgroundColor: color || "gray", // Default color if no prop is provided
    border: "1px solid black",
    textAlign: "center"
  };
  return <div style={boxstyle}>Colors Collection</div>;
};
// Usage Example
const App = () => {
  return (
    <div>
      <h2>Dynamic Styling Example</h2>
      <ColorBox color="blue" />
      <ColorBox color="red" />
      <ColorBox color="green" />
      <ColorBox color="gray"/>
    </div>
  );
};

export default App;
