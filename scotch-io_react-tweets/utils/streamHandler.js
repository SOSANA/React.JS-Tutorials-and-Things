/**
 * When our Twitter stream connection sends a new Tweet event, we need a method
 * to take that data, save it to our database, and emit an event to the client
 * side with the tweet data
 */
var Tweet = require('../models/Tweet');

module.exports = function (stream, io) {

  // when tweets get sent our way ...
  stream.on('data', function(data) {

    // construct a new tweet object
    var tweet = {
      twid: data.id,
      active: false,
      author: data.user.name,
      avatar: data.user.profile_image_url,
      body: data.text,
      date: data.created_at,
      screenname: data.user.screen_name
    };

    // create a new model instance with our object
    var tweetEntry = new Tweet(tweet);

    // save 'er to the database
    tweetEntry.save(function(err) {
      if (!err) {
        // if everyting is cool, socket.io emits the tweet
        io.emit('tweet', tweet);
      }
    });

  });
  
};
