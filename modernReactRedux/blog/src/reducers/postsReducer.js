import { FETCH_POSTS } from '../actions/index';

// two pieces of application state: all posts, and active posts
const INITIAL_STATE = { all: [], post: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // all: action.payload.data is our response from the api
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
