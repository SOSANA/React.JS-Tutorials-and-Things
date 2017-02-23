import React from 'react';
import { Router, hashHistory } from 'react-router';

import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';
// no need for this imports as used in componentRoutes object
// import ArtistDetail from './components/artists/ArtistDetail';
// import ArtistCreate from './components/artists/ArtistCreate';
// import ArtistEdit from './components/artists/ArtistEdit';

const componentRoutes = {
  component: Home,
  path: '/',
  IndexRoute: { component: ArtistMain },
  childRoutes: [
    {
      path: 'artists/new',
      getComponent(location, cb) { // async load functions
        import('./components/artists/ArtistCreate') // path to module component
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'artists/:id',
      getComponent(location, cb) {

        import('./components/artists/ArtistDetail') // path to module component
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'artists/:id/edit',
      getComponent(location, cb) {

        import('./components/artists/ArtistEdit') // path to module component
          .then(module => cb(null, module.default));
      }
    }
  ]
}

const Routes = () => {
  return (
    <Router history={hashHistory} routes={componentRoutes} />
  );
};

export default Routes;
