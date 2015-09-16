/**
 * Our store is the object that is going to be in charge of fetching and storing our data
 */
 
 var Api = require('../utils/api');
 var Reflux = require('reflux');
 
 module.exports = Reflux.createStore({
   getTopics: function() {
     return Api.get('topics/defaults')
      .then(function(json){
        this.topics = json.data
      }.bind(this));
   }
 });