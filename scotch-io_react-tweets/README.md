# [react-tweets](https://github.com/scotch-io/react-tweets)
### A Real-Time Twitter Stream with Node and React.js
Project Directory Structure
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
We now have a couple of commands we can use:
```
npm run watch – Running this command starts a watchify watch, so when we edit our js files, they get browserified on save.
npm run build – Running this command builds our bundle.js and minifies it for production
npm start – Running this command sets up a watch and runs our app via nodemon
node server – This command is what we use to run our app. In a production environment, I would recommend using something like forever or pm2.
```
