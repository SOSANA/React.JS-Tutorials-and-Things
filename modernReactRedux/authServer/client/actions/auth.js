import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types';

const ROOT_URL = 'http://localhost:8080';

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
        // if request is good, update the state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // save the JWT token to localStorage (which is a method available via the window scope)
        localStorage.setItem('token', res.data.token);
        // redirect to the route '/feature'
        browserHistory.push('/feature');
      })
      .catch(() => {
        // if request is bad, show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  };
}

export function signupUser({ email, password }) {
  return (dispatch) => {
    // submit email/password to the server
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(res => {
        // if request is good, update the state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // save the JWT token to localStorage (which is a method available via the window scope)
        localStorage.setItem('token', res.data.token);
        // redirect to the route '/feature'
        browserHistory.push('/feature');
      })
      .catch(response => {
        // if request is bad, show an error to the user provided by the server
        // api issue with axios, quick fix add extra response object
        dispatch(authError(response.response.data.error));
      });
  };
}

// this could be used for a list of posts, list of emails, or list of tweets etc or what ever
// piece of resource you are tring to retrieve from the back-end
export function fetchMessage() {
  return (dispatch) => {
    // key is including our jwt in our header to make our authenticated request
    axios.get(`${ROOT_URL}/feature`, {
      headers: { authorization: localStorage.getItem('token') },
    })
    .then(res => {
      // see the json response body object
      // console.log(response); // eslint-disable-line
      dispatch({
        type: FETCH_MESSAGE,
        payload: res.data.message,
      });
    });
  };
}

export function signoutUser() {
  // removes JWT token from local storage
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}
