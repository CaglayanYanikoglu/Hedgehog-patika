import React, { useReducer } from 'react';

const initialState = { count: 100, name: 'caglayan' };

function reducer(state, action) {
  // console.log(state);
  console.log({ state });
  console.log({ action });
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }; // new state
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'changeName':
      return { ...state, name: action.payload }
    default:
      return { ...state };
      // throw new Error();
  }
}

const Counter = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count reducer: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <div>
        <button onClick={() => dispatch({ type: 'changeName', payload: 'mustafa' })}>Change name</button>
      </div>
      <p>State name: {state.name}</p>
    </>
  );
}

export default Counter;