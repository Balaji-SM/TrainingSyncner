import React, { useState, useCallback } from "react";
import './App.css';

const Counter = ({ increment, count }) => {
  console.log("Counter component rendered");
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment} style={{ padding: "10px 15px", fontSize: "16px" }}>
        Increment
      </button>
    </div>
  );
};

const MemoizedCounter = React.memo(Counter);

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <MemoizedCounter increment={increment} count={count} />
    </div>
  );
};

export default ParentComponent;
