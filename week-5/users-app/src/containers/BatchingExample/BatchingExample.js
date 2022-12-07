import React, { useState } from 'react';

const BatchingExample = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);

  console.log('batching render');

  const handleClick = () => {
    // updating all states in one render: Batching
    setCounter(counter + 1);
    setTodos([...todos, 'New Todo']);
    // setCounter(prevCounter => prevCounter + 1);
  };

  const handleTimeoutClick = () => {
    setTimeout(() => {
      // setCounter(counter + 1);
      setCounter(x => x + 1);
      setTodos(prevTodos => [...prevTodos, 'New Todo']);
    }, 3000);
  }

  return (
    <div style={{ textAlign: 'center', paddingTop: '40px' }}>
      <p>Count: {counter}</p>
      <div>
        <button onClick={handleClick}>Increase Counter</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleTimeoutClick}>Increase Counter with Settimeout</button>
      </div>
      {todos.map(item => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default BatchingExample;
