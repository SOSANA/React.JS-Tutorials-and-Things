/**
 * Our store is the object that is going to be in charge of fetching and storing our data
 */
 var Api = require('../utils/api');
 var Reflux = require('reflux');
 var Actions = require('../actions/topic-action');
 
 module.exports = Reflux.createStore({
  // listenables provided by reflux
  // listening to all the actions via the property listenables
  listenables: [Actions],
  getTopics: function() {
   return Api.get('topics/defaults')
    .then(function(json){
      this.topics = json.data;
      // when ever we successfully fetch data, we are calling triggerChange function
      // triggerChange()
      this.triggerChange();
      }.bind(this));
  },
/**
 * Define our trigger change
 * - 'this.trigger' is a method provided from Reflux and we get access because we use
 *   'Reflux.createStore'. the first argument .trigger is a string which is the name of the event
 *   that we want to trigger. Triggering an event like below basically means hey an event just 
 *   happened and I want to tell you about it. The second argument is the information that we want 
 *   to share and its the information we want to tell every other component in our application 
 *   here is what just happened, here is the relevant information
 * - You can think of this event as the same exact way we setup our event handlers in earlier sections. 
 *   In earlier sections we would setup event handlers on like onClick and when onClick was called, it 
 *   would call a function to which we got an event object, and that event object contained some amount 
 *   of information about what just occured
 */
   triggerChange: function () {
    this.trigger('change', this.topics);
   }
 });