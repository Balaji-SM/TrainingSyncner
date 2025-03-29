
// App.jsx
import React, { useState, useEffect } from "react";
import './App.css';
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms debounce delay

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Debounced Search</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <p>Search Query: {debouncedSearchTerm}</p>
    </div>
  );
}

export default App;
