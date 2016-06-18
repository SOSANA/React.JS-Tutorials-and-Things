/**
 * tasks:
 *  [x] create a new component, this component should produce some html
 */
import React from 'react';
import ReactDom from 'react-dom';
import API_KEY from '../API_KEY';

const App = () => {
  return <div> <h1>Hello There!!!</h1></div>;
}

// making an instance of our component
ReactDom.render(<App />, document.querySelector('.container'));
