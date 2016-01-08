/**
 * - when we want to access the inner HTML or nested components of another
 * 	 Component we can use 'this.props.children' in react
 */
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <Button>I <Heart/> React</Button>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button>{this.props.children}</button>
    );
  }
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>;

export default App;
