import axios from 'axios';

// our constant type's
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

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

// action creator to fetch a post
export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request,
  };
}

// action creator to delete a post
export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: request,
  };
}
