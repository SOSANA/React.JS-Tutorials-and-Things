# [react-tweets](https://github.com/scotch-io/react-tweets)
 A Real-Time Twitter Stream with Node and React.js

```
components/ // React Components Directory
---- Loader.react.js            // Loader Component
---- NotificationBar.react.js   // Notification Bar Component
---- Tweet.react.js             // Single Tweet Component
---- Tweets.react.js            // Tweets Component
---- TweetsApp.react.js         // Main App Component
models/ // Mongoose Models Directory
---- Tweet.js // Our Mongoose Tweet Model
public/ // Static Files Directory
---- css
---- js
---- svg
utils/
----streamHandler.js // Utility method for handling Twitter stream callbacks
views/      // Server Side Handlebars Views
----layouts
-------- main.handlebars
---- home.handlebars
app.js      // Client side main
config.js   // App configuration
package.json
routes.js // Route definitions
server.js   // Server side main
```
