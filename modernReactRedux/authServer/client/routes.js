import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Feature from './components/feature';
import requireAuth from './components/auth/requireAuth';
import Welcome from './components/welcome';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="signin" component={Signin} />
    <Route path="signout" component={Signout} />
    <Route path="signup" component={Signup} />
    <Route path="feature" component={requireAuth(Feature)} />
  </Route>
  );
