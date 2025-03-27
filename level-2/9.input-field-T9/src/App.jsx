import './App.css'
import React, { useState } from "react";


function DynamicInput() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Dynamic Input Field</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={()=>setText(text)}>submit</button>
      <h3>you typed:{text}</h3>
    </div>
  );
}

export default DynamicInput;
