/**
 * In our app we use Mongoose to define our Tweet model. When receiving our
 * data from our Twitter stream, we need somewhere to store it, and a static
 * query method to return subsets of data based upon app parameters
 */

var mongoose = require('mongoose');

// create a new schema for our tweet data
var schema = new mongoose.Schema({
  twid: String,
  active: Boolean,
  author: String,
  avatar: String,
  body: String,
  data: Date,
  screenname: String
});

/**
 * After defining our schema, we create a static method called getTweets. It
 * takes 3 arguments, page, skip & callback.
 *
 * When we have an application that not only renders server side, but has an
 * active stream saving to the database behind the scenes, we need to create a
 * way to make sure that when we request our next page of tweets, it takes into
 * account that Tweets may have been added since the app has been running on the
 * client.
 *
 * This is where the skip argument comes into play. If we have 2 new tweets come
 * in, and then request the next page, we need to skip 2 indexes forward so that
 * our application’s pages are relative to it’s original count, and we don’t end
 * up with duplicate tweets.
 */

// create a static getTweets method to return tweet data from the db
schema.statics.getTweets = function(page, skip, callback) {

  var tweets = [],
      start = (page * 10) + (skip * 1);

  // query the db, using skip and limit to achieve page chunks
  Tweet.find({}, 'twid active author avatar body date screenname', { skip: start, limit: 10 }).sort({ date: 'desc' }).exec(function(err, docs) {

    // if everything is cool...
    if (!err) {
      tweets = docs; // we got tweets
      tweets.forEach(function(tweet) {
        tweet.active = true; // set them to active
      });
    }

    // pass them back to the specified callback
    callback(tweets);

  });
};

// return a tweet model based upon the defined schema
module.exports = tweet = mongoose.model('Tweet', schema);
