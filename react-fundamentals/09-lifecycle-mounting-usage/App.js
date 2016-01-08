/**
 * when a component is added or removed this is called mounting
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({ val: this.state.val + 1 });
  }

  // access before the dom
  componentWillMount() {
    this.setState({ m: 2 });
  }

  // access in the dom
  componentDidMount() {
    // console.log(ReactDOM.findDOMNode(this));
    // update every half second
    this.inc = setInterval(this.update, 500);
  }

  // clean up any processes we may have running in the dom
  componentWillUnmount() {
    clearInterval(this.inc);
  }

  render() {
    console.log('rendering!');
    return (
      <button onClick={this.update}>{this.state.val * this.state.m}</button>
    );
  }
}

// creating our wrapper component
class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'));
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }

  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    );
  }
}

export default Wrapper;
