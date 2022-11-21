import React, { useState, useEffect } from 'react';

import Home from './components/Home';
import './App.css';


function App() {
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);

/*   useEffect(() => {
    console.log('use effect');
    const intervalFunc = setInterval(() => {
      setSeconds(prevState => prevState + 1);
    }, 1000);

    // component will unmount
    // it calls before useeffect run
    return () => {
      console.log('use effect return');
      clearInterval(intervalFunc);
    }
    // console.log('use effect');
  }, [count]); */

  return (
    <div className="App">
      {/* <h1>Hello world</h1>
      <p>Seconds: {seconds}</p>
      <p>Button count: {count}</p>
      <button onClick={() => setCount(prevState => prevState + 1)}>Click</button> */}
      <Home appName="Todo App" />
    </div>
  );
}

export default App;
