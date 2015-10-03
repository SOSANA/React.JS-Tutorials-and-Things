var Reflux = require('reflux');

//This will trigger a 'getTopics' and 'getImages' method on either topic-store or image-store
module.exports = Reflux.createActions([
  'getTopics',
  'getImages',
  'getImage'
]);
