import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h1>Counter App</h1>
      <br />
      <button onClick={increment}>Increment</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
