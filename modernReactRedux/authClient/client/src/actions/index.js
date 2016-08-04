import axios from 'axios';
import { browserHistorhy } from 'react-router';
import { AUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://localhost:8089';

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}

export function signinUser({ email, password }) {
  return (dispatch) => {
    // submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then(res => {
      // if request is good...
      // update to state to indicate user is authenticated
      dispatch({ type: AUTH_USER });
      // save the JWT token to localStorage (which is a method available via the window scope)
      localStorage.setItem('token', res.data.token);
      // redirect to the route '/feature'
      browserHistorhy.push('/feature');
    })
    .catch(() => {
      // if request is bad...

      // show an error to the user
      dispatch(authError('Bad Login Info'));
    });
  };
}
