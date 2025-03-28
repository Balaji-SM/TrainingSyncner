import { useState } from "react";
import './App.css';

const ControlledInput = () => {
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <p>You typed: {text}</p>
    </div>
  );
};

export default ControlledInput;
