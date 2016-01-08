/**
 * - unlike props which are meant to passed into our component as static values
 * 	 or methods, state is a collection of values thats meant to be managed by
 * 	 our component itself
 */
import React from 'react';

class App extends React.Component {
  constructor() {
    // super gives us our context for 'this'
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0,
    };
  }

  // creating a custom method
  update(e) {
    this.setState({ txt: e.target.value });
  }

  render() {
    return (
      <div>
        <input type ="text"
          onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
      </div>
    );
  }
}

export default App;
