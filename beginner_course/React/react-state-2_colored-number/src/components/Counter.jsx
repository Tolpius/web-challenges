import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [state, setState] = useState(0);

  function handleIncrement() {
    setState(state + 1);
  }

  function handleDecrement() {
    setState(state - 1);
  }
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={state} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </div>
  );
}
