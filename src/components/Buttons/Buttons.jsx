import React from "react";
import "./Buttons.scss";

const Buttons = ({ onButtonClick }) => {
  const btnValues = [
    ["C", "⌫", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  return (
    <div className="buttons">
      {btnValues.flat().map((btn, i) => (
        <button
          key={i}
          className={`btn ${btn === "=" ? "equals" : ""}`}
          onClick={() => onButtonClick(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
