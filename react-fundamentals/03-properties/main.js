import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(
  <App cat={5} />, document.getElementById('app'));

  // this would override defaultProps
  //<App cat={5} txt="This is the props value"/>, document.getElementById('app'));
