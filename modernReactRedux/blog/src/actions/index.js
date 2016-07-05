import axios from 'axios';

// our constaints
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

// normally store this in hidden config file FYI
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=randomCharacters';

// action creator to fetch our posts
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

// action creator to handle our redux-form
export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request,
  };
}
