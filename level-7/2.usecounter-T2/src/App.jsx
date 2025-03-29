// App.js
import React, { useState } from "react";
import './App.css';
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

function App() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Counter: {count}</h2>
      <button className="bb" onClick={increment}>Increment</button>
      <button className="dd" onClick={decrement}>Decrement</button>
      <button className="rr"onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
