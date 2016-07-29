import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './components/app';

export default function getRoutes(store) {
  return (
    <Route path="/" component={App} />
  );
}
