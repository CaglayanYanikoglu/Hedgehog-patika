import React from 'react';
import './App.css';

import Form from './components/Form';
import Counter from './components/Counter';

// functional component
// JSX: Using Html in Javascript
const App = () => {
  const appName = 'Patika';

  return (
    <div className="App">
      {/* <p>Hello React</p>
      <Form />
      <p>Another Form:</p>
      <Form /> */}
      <Counter appName={appName} />
    </div>
  );
}

/* class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>Hello React</p>
      </div>
    )
  }
} */

export default App;
