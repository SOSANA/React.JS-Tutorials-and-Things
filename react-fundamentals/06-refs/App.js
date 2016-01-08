/**
 * - refs are a way to reference an instance of a component from within our
 * 	 react application
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    // super gives us our context for 'this'
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0,
    };
    this.update = this.update.bind(this);
  }

  // creating a custom method
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value,
    });
  }

  render() {
    return (
      <div>
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <br />
        <Slider ref="green" update={this.update} />
          {this.state.green}
          <br />
        <Slider ref="blue" update={this.update} />
          {this.state.blue}
          <br />
      </div>
    );
  }
}

class Slider extends React.Component {
  render() {
    return (
      <div>
        <input ref="inp" type ="range"
          min="0"
          max="255"
          onChange={this.props.update} />
      </div>
    );
  }
}

// creating a stateless component, ***ref's won't work with stateless components
/*
const Widget = (props) => {
  return (
    <div>
      <input type ="text"
        onChange={props.update} />
      <h1>{props.txt}</h1>
    </div>
  );
};
*/

export default App;
