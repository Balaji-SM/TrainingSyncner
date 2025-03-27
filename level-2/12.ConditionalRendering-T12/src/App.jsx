import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const Greeting = ({ isLoggedIn }) => {
  return (
    <h2>{isLoggedIn ? "Welcome back!" : "Please log in"}</h2>
  );
};

// Usage
const App = () => {
  return <Greeting isLoggedIn={true} />;
};

export default App;

