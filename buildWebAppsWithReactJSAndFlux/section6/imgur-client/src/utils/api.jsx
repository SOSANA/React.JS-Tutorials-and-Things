/** 
 * making a special api module that will make all our requests to imgur by
 * centralizing all our data we want to work with 
 */
var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
// manually add Client-ID API KEY
var apiKey = 'add Client-ID API KEY';

/** 
  * making a request with fetch returns a promise object
  * we use promises to deal with code that might take a long time to complete
  * like ex: ajax requests. When the response is complete. It will call what ever
  * function we pass to .then(). The function we pass to .then() is called with this
  * response object. The response object itself doesn't contain any data that is 
  * useful to us. To make use of the data we have to call the function json() on it.
  * Once we call response.json() we are going to chain on another .then() and pass it
  * in function that in turn gets a paremeter of data and this data object is the 
  * actual useful data that we want to work with
  * ex:
    module.exports = window.api = {
    ...
  * Api.get('topics/defaults')
    .then(function(response){
      // Do something with the data ex:
      return response.json();
    })
  */

module.exports = {
  get: function(url) {
    // to make the actual ajax request we used the fetch library
    // we pass fetch the absolute url and specific api endpoint we want to hit
    return fetch(rootUrl + url, {
      // we pass in this headers object that contained our imgur Client-ID
      // the purpose of this, is to communicate the identity with imgur
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function(response){
      return response.json();
    })
  }
};