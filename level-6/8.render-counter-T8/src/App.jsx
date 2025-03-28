import React, { useReducer } from "react";
import './App.css';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Counter: {state.count}</h2>
      <button className="inc" onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })} style={{ marginLeft: "10px" }}>decrement</button>
    </div>
  );
};

export default Counter;

