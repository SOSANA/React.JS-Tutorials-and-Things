/**
 * - render method of react is only allowed to return a single node
 */
import React from 'react';

// one way to create a component, called a 'class component' which has state
// can only return one element
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World, again</h1>
        <b>Bold</b>
      </div>
    );
  }
}

// without parentheses, first element tag needs to be on return line
// either way is prference
/*
class App extends React.Component {
  render() {
    return <div>
        <h1>Hello World, again part deux</h1>
        <b>Bold</b>
        </div>;

  }
}
*/

export default App;
