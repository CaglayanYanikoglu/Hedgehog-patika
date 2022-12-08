// import { memo } from "react";
import React from 'react';

const Todos = ({ todos, addTodo }) => {
  console.log("child render: ", todos);
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

// export default Todos;
// export default memo(Todos);
export default React.memo(Todos);