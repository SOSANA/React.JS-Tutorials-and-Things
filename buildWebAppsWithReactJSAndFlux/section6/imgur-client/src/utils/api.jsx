var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = require('./apiKey');

module.exports = window.api = {
  get: function(url) {
    return Fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function(response){
      console.log(response);
    });
  }
};

