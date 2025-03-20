import { useState } from 'react';
import './App.css';

function App() {
  let num1 = parseInt(prompt("Enter the first number:"));
  let num2 = parseInt(prompt("Enter the second number:"));

  let sum = num1 + num2; // Corrected variable name

  return (
    <h1>The sum is: {sum}</h1>
  );
}

export default App;

