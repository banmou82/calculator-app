import React from "react";
import "./Display.scss";

const Display = ({ input, result }) => {
  return (
    <div className="display">
      <div className="input">{input || "0"}</div>
      <div className="result">{result !== "" ? `= ${result}` : ""}</div>
    </div>
  );
};

export default Display;
