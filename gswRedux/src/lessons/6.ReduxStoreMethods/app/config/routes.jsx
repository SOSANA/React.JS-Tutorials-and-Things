import React from 'react';
import Home from '../components/Home';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={Home}>
    <IndexRoute component={Home} />
  </Route>
);
