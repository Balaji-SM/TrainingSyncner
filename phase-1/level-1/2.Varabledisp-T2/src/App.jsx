import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  let name = prompt("Enter your name:");

  return <h2>Hello, {name}</h2>;
}

export default App;

