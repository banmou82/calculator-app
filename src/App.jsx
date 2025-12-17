import React, { useState } from "react";
import "./App.scss";
import Display from "./components/Display/Display";
import Buttons from "./components/Buttons/Buttons";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "⌫") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        // eslint-disable-next-line no-eval
        const res = eval(input);
        setResult(res);
      } catch {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <h1>🧮 Calculator</h1>
      <Display input={input} result={result} />
      <Buttons onButtonClick={handleClick} />
    </div>
  );
};

export default App;
