/**
 * - when one component renders another component, this is what react refer's
 * 	 to as the 'owner-ownee' relationship where the parent component is also
 * 	 called a composite component
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
    this.update = this.update.bind(this);
  }

  // creating a custom method
  update(e) {
    this.setState({ txt: e.target.value });
  }

  render() {
    return (
      <div>
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
      </div>
    );
  }
}

// creating a stateless component
const Widget = (props) => {
  return (
    <div>
      <input type ="text"
        onChange={props.update} />
      <h1>{props.txt}</h1>
    </div>
  );
};

export default App;
