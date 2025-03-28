import React, { useRef } from "react";
import './App.css';

const InputFocus = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus"
        style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
      />
      <button onClick={handleFocus} style={{ padding: "10px 15px", fontSize: "16px" }}>
        Focus Input
      </button>
    </div>
  );
};

export default InputFocus;
