import axios from 'axios';

import { FETCH_USERS } from './constants';

export function fetchUsers() {
  // Fake Online REST API for Testing and Prototyping
  // src: http://jsonplaceholder.typicode.com/
  // axios returning a promise
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  return {
    type: FETCH_USERS,
    payload: request,
  };
}
