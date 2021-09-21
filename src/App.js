import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log("error :", error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            className={`${error ? "error" : null}`}
          />

          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          const { rgb, weight, hex } = color;
          return (
            <SingleColor
              key={index}
              index={index}
              rgb={rgb}
              weight={weight}
              hex={hex}></SingleColor>
          );
        })}
      </section>
    </>
  );
}

export default App;
