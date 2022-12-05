import React, { useState, useCallback } from 'react';
import Todos from './Todos';
import { sumNumbers } from '../../helpers/index';

const CallbackExample = () => {
  console.log('parent render');
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
    // setCount(count + 1);
    // TODO: show different between above codes
  };

  const addTodo = useCallback(() => {
    setTodos(prevTodos => [...prevTodos, "New Todo"]);
  }, []); // dependency array

  /* const result = () => {
    return sumNumbers(12, 15);
  }; */

  // const result = useCallback(() => sumNumbers(12, 15), []);

  /* const addTodo = () => {
    setTodos(prevTodos => [...prevTodos, "New Todo"]);
  }; */

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      {/* <button onClick={addTodo}>Add Todo</button> */}
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default CallbackExample;
