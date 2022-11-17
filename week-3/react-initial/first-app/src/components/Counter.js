import React, { useState, useEffect } from 'react';
import Card from './Card';
import CardwithClass from './CardwithClass';

const Counter = ({
  appName
}) => {
  // Hook
  const [counter, setCounter] = useState(0);
  // let counter = 0;

  /* useEffect(() => {
    console.log('use effect');
  }, []); */

  const handleClick = (e) => {
    // console.log('click', e);
    setCounter(counter + 1);
    // counter += 1;
    // setCounter();

    // for async
    // setCounter(prevState => prevState + 1)
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <p>Current count: {counter}</p>
      <button className="test" onClick={handleClick}>Increase Count</button>
      {/* <Card value="Hello world" countValue={counter} appName={appName} /> */}
      {counter !== 5 && <CardwithClass countValue={counter} appName={appName} />}
      
    </div>
  );
};

export default Counter;
