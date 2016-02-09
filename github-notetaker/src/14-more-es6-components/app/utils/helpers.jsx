import axios from 'axios';

function getRepos(username) {
  // applying es6 string literal
  return axios.get(`https://api.github.com/users/${username}/repos`);
};

function getUserInfo(username) {
  // applying es6 string literal
  return axios.get(`https://api.github.com/users/${username}`);
};

// the constant declaration creates read only reference to a value
// this makes it so 'helpers' variable itself can not be reassigned, this is not
// necessary immutable but takes it one step closer
const helpers = {
  getGithubInfo(username) {
    return axios.all([getRepos(username), getUserInfo(username)])
    .then((arr) => ({ repos: arr[0].data, bio: arr[1].data, }));
  },
};

export default helpers;
