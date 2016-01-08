/**
 * - we can pass values into our component using something called props or
 * 	 properties. This is going to look at a lot like passing or setting an
 *   attribute on a standard HTML element
 * - props are meant to be passed into our component as static values or
 * 	 methods
 */
import React from 'react';

class App extends React.Component {
  render() {
    let txt = this.props.txt;
    let cat = this.props.cat;
    return (
      <div>
        <h1>{txt}</h1>
        <h2>{cat}</h2>
      </div>
  );
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired,
};

App.defaultProps = {
  txt: 'This is the default txt',
};

export default App;
