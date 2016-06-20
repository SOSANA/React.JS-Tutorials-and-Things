/**
 * tasks:
 *  [x] create a new component, this component should produce some html
 */
import React from 'react';
import ReactDom from 'react-dom';
import API_KEY from '../config/API_KEY';
import SearchBar from './components/search_bar';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// making an instance of our component
ReactDom.render(<App />, document.querySelector('.container'));
