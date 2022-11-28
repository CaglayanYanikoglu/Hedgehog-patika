import React, { useState, useMemo } from 'react';
import UserList from '../UserList';
import { sumNumbers } from '../../helpers';

const Home = () => {
  console.log('home page rendered');
  const [counter, setCounter] = useState(0);

  const [number1, setNumber1] = useState(5);
  const [number2, setNumber2] = useState(12);

  // sum without memo
  /* const sum = sumNumbers(5, 12); */

  const memoizedSumValue = useMemo(() => sumNumbers(number1, number2), [number1, number2]);

  return (
    <div>
      <div>
        <button onClick={() => setCounter(counter + 1)}>Increase Count</button>
        <p>Current Count: {counter}</p>
        {/* <p>Sum Numbers: {sum}</p> */}
        <p>Sum Numbers with memo: {memoizedSumValue}</p>
        <div>
          <button onClick={() => setNumber1(number1 + 1)}>Increase Number 1</button>
          <button onClick={() => setNumber2(number2 + 1)}>Increase Number 2</button>
        </div>
      </div>
      {/*  <UserList appName="User List" counter={counter} /> */}
    </div>
  );
};

export default Home;
