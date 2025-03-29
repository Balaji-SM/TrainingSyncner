import './App.css';
import React, { useState, useRef } from "react";

function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef(null);

  const onChange = (e) => setValue(e.target.value);

  return { value, onChange, inputRef };
}

function App() {
  const { value, onChange, inputRef } = useInput("");

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input  ref={inputRef} type="text" value={value} onChange={onChange} placeholder="Enter text" />
      <p>Input Value: {value}</p>
    </div>
  );
}

export default App;