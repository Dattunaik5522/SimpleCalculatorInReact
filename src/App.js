import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <input type="text" value={input} name="input" onChange={handleOnChange} />
      <br />
      <br />
      <button onClick={() => setResult(eval(input))}>Result</button>
      <h4>Result is : {result}</h4>
      <br />
      <br />
      <button onClick={() => setInput(input + "1")}>1</button>
      <button onClick={() => setInput(input + "2")}>2</button>
      <button onClick={() => setInput(input + "3")}>3</button>
      <br />
      <button onClick={() => setInput(input + "4")}>4</button>
      <button onClick={() => setInput(input + "5")}>5</button>
      <button onClick={() => setInput(input + "6")}>6</button>
      <br />
      <button onClick={() => setInput(input + "7")}>7</button>
      <button onClick={() => setInput(input + "8")}>8</button>
      <button onClick={() => setInput(input + "9")}>9</button>
      <br />
      <button onClick={() => setInput(input + "0")}>0</button>
      <button onClick={() => setInput(input + "-")}>-</button>
      <button onClick={() => setInput(input + "+")}>+</button>
      <br />
      <button onClick={() => setInput(input + "*")}>*</button>
      <button onClick={() => setInput(input + "/")}>/</button>
      <button onClick={() => setInput("")}>clear</button>
    </div>
  );
}
