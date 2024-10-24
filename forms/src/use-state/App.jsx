import React, { useState, useRef } from 'react';

function Counter() {
  // Declare a state variable 'count' and set its initial value to 0.
  // 'setCount' is the function we use to update 'count'.
  const [count, setCount] = useState(0);

  const changeStateFullCounter = () => {
    setCount(count + 1);
    console.log("couterStateless", count);
  }

  let counterStateless = 0;
  const changeStatelessCounter = () => {
    counterStateless += 1;
    console.log("counterStateless:", counterStateless);
  };

  return (
    <div>
        <h3>StateFull counter: {count}</h3>
      <button onClick={changeStateFullCounter}>
        Click me
      </button>

        <h3>Stateless counter: {counterStateless}</h3>
        <button onClick={changeStatelessCounter}>
        Click me
        </button>
    </div>
  );
}

export default Counter;