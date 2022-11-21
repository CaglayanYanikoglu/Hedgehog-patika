import React from 'react';

import TodoApp from './TodoApp';

class Home extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // handleCount.bind(this)
  }

  handleCountArrow = () => {
    console.log(' handle count arrow this props: ', this.props.appName);
  }

  handleCount = function () {
    console.log(' handle count normal function this props: ', this.props.appName);
  }

  render() {
    return (
      <>
        <h1 className="test">
          Home Page
        </h1>
        {/* <button onClick={this.handleCount}>Click</button> */}
        <TodoApp />
      </>
    )
  }
}

export default Home;
