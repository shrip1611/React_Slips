// Q.2 Create Redux store of counter button to display the current count and provides 
// two buttons increment and decrement the count. 

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Count = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>Redux Counter</h1>
      <h3>Current Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Count;
