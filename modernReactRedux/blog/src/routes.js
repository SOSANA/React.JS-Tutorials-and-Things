import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/postsIndex';
import NewPost from './components/newPost';
import ShowPost from './components/showPost';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={NewPost} />
    <Route path="posts/:id" component={ShowPost} />
  </Route>
);
