import React, { useState } from "react";
import "./Calculator.css";

function calculator() {
  const [input, setInput] = useState("0");
  const [darkMode, setDarkMode] = useState(true);

  const handleClick = (value) => {
    if (input === "0") {
      setInput(value.toString());
    } else {
      setInput(input + value.toString());
    }
  };

  const handleClear = () => setInput("0");

  const handleDelete = () => {
    if (input.length === 1) {
      setInput("0");
    } else {
      setInput(input.slice(0, -1));
    }
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "container dark" : "container light"}>
      <div className="calculator">
        <div className="header">
          <h2>Calculator</h2>
          <button className="mode-btn" onClick={toggleMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <div className="display">
          <input type="text" value={input} readOnly />
        </div>
        <div className="buttons">
          <button className="btn" onClick={handleClear}>
            AC
          </button>
          <button className="btn" onClick={handleDelete}>
            DE
          </button>
          <button className="btn" onClick={() => handleClick(".")}>
            .
          </button>
          <button className="btn operator" onClick={() => handleClick("/")}>
            /
          </button>

          <button className="btn" onClick={() => handleClick(7)}>
            7
          </button>
          <button className="btn" onClick={() => handleClick(8)}>
            8
          </button>
          <button className="btn" onClick={() => handleClick(9)}>
            9
          </button>
          <button className="btn operator" onClick={() => handleClick("*")}>
            *
          </button>

          <button className="btn" onClick={() => handleClick(4)}>
            4
          </button>
          <button className="btn" onClick={() => handleClick(5)}>
            5
          </button>
          <button className="btn" onClick={() => handleClick(6)}>
            6
          </button>
          <button className="btn operator" onClick={() => handleClick("+")}>
            +
          </button>

          <button className="btn" onClick={() => handleClick(1)}>
            1
          </button>
          <button className="btn" onClick={() => handleClick(2)}>
            2
          </button>
          <button className="btn" onClick={() => handleClick(3)}>
            3
          </button>
          <button className="btn operator" onClick={() => handleClick("-")}>
            -
          </button>

          <button className="btn" onClick={() => handleClick("00")}>
            00
          </button>
          <button className="btn" onClick={() => handleClick(0)}>
            0
          </button>
          <button className="btn equal" onClick={handleCalculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default calculator;
