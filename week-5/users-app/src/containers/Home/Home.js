import React, { useState } from 'react';
import UserList from '../UserList';

const Home = () => {
  console.log('home page rendered');
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>
        <button onClick={() => setCounter(counter + 1)}>Increase Count</button>
        <p>Current Count: {counter}</p>
      </div>
      <UserList appName="User List" /* counter={counter}  *//>
    </div>
  );
};

export default Home;
