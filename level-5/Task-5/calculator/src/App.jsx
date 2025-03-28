import React, { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setExpression("");
    } else if (value === "=") {
      try {
        setExpression(eval(expression).toString());
      } catch {
        setExpression("Error");
      }
    } else {
      setExpression((prev) => prev + value);
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">{expression || "0"}</div>
        <div className="buttons">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", "C", "=", "+"].map((btn) => (
            <button key={btn} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
