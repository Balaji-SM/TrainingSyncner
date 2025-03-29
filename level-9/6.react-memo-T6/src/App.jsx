import React, { useState, useEffect, memo } from "react";

const LargeList = memo(({ items }) => {
  console.log("LargeList re-rendered");

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
});

const App = () => {
  const [count, setCount] = useState(0);
  const items = Array.from({ length: 1000 }, (_, index) => ({
    id: index,
    name: `Item ${index + 1}`,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <LargeList items={items} />
    </div>
  );
};

export default App;
