import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

// normally store this in hidden config file FYI
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=randomCharacters';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request,
  };
}
