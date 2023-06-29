import React, { useState } from "react";

function CounterExercise() {
  const [Count, setCount] = useState(0);

  const increment = () => {
    setCount(Count + 1);
  };
  const decrement = () => {
    setCount(Count - 1);
  };

  return (
    <div>
      <h1>Counter System</h1>
      <h1>Counter: {Count}</h1>
      <button className="w-300 h-300" onClick={decrement}>
        Decrement
      </button>
      <button className="w-300 h-300" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default CounterExercise;
