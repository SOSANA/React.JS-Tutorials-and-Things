// require our dependencies
var express = require('express');
exphbs = require('express-handlebars'),
http = require('http'),
mongoose = require('mongoose'),
twitter = require('ntwitter'),
routes = require('./routes'),
config = require('./config'),
streamHandler = require('./utils/streamHandler');

// create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

// set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// disable etag headers on responses
app.disable('etag');

// connect to our mongo database
mongoose.connect('mongodb://localhost/react-tweets');


/**
 * nTwitter allows us to access the Twitter streaming API, so we use the
 * 'statuses/filter' endpoint, along with the track property, to return tweets
 * that use a #scotchio hash tag or mention scotch_io. You can modify this
 * query to your liking by using the settings outlined within the Twitter
 * Streaming API.
 */

// create a new ntwitter instance
var twit = new twitter(config.twitter);

// index route
app.get('/', routes.index);

// page route
app.get('/page/:page/:skip', routes.page);

// set /public as our static content dir
app.use('/', express.static(__dirname + '/public/'));

// fire it up (start the server)
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

// initialize socket.io
var io = require('socket.io').listen(server);

// set a stream listener fo retweets matching tracking keywords
twit.stream('statuses/filter', { track: 'scotch_io', #scotchio}, function (stream) {
  streamHandler(stream, io);
});
