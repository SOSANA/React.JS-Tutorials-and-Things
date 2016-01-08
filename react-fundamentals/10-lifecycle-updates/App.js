/**
 * - important thing to note here is that even though we are not updating or
 * 	 re-rending our component our state is in fact being updated as well as our
 *   props
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = { increasing: false };
  }

  update() {
    ReactDOM.render(
      <App val={this.props.val + 1 } />,
      document.getElementById('app')
    );
  }

  // takes in the next properties that are going to be passed into our component
  componentWillReceiveProps(nextProps) {
    //if our property is in fact increasing set it to true
    this.setState({ increasing: nextProps.val > this.props.val });
  }

  // takes in our next props and our next state, here we can decided whether or
  // not to update at all
  shouldComponentUpdate(nextProps, nextState) {
    // returning multples of 5, returning a true false value
    // this is a great opportunity to optimize your component to make sure your
    // not re-render if you don't need too
    return nextProps.val % 5 === 0;
  }

  // takes in our our prevProps as well as our prevState
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
  }

  render() {
    console.log(this.state.increasing); // false until we click to increase value
    return (
      <button onClick={this.update}>{this.props.val}</button>
    );
  }
}

App.defaultProps = { val: 0 };

export default App;
