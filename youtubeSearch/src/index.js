/**
 * tasks:
 *  [x] create a new component, this component should produce some html
 */
import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return <div> Hi!</div>;
}

// making an instance of our component
ReactDom.render(<App />, document.querySelector('.container'));
