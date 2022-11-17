import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Caglayan'
    }
  }

  componentDidMount() {
    console.log('component did mount');
  }
  
  componentDidUpdate() {
    console.log('component did update');
  }

  componentWillUnmount() {
    console.log('component will unmount');
  }
  

/*   handleChange = function() {
    console.log('helloo my name is ', this);
  } */

  handleChange = () => {
    // const username = 'caglayan'
    this.setState({
      name: 'Ali'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.props.appName}</h1>
        <p>My name is {this.state.name}</p>
        <button onClick={this.handleChange}>Change name</button>
      </div>
    )
  }
}

export default Card;
