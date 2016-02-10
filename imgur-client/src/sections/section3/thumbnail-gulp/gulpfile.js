/**
 * Gulp file:
 * 	- remember that we use gulp as a skeleton to run our build process
 * 	- we require other plugins that work with gulp that tell it to do very specific steps/tasks
 */

// gulp is the skeleton and responsible for the build process
var gulp = require('gulp');
// gutil is responsible for console logging out our build process, here for debugging
var gutil = require('gulp-util');
// source is used for handling our text files from one build process to another
var source = require('vinyl-source-stream');
// browserify is responsible for figuring out what part of our code depends on other parts of
// our code and making sure that load order is done correctly
var browserify = require('browserify');
// watchify is a tool that automatically reruns our gulp file for us when ever our code changes
// we don't have to rerun gulp to start our build process every time we make changes
var watchify = require('watchify');
// reactify works in conjunction with our browserify to handle converting our jsx files into js
var reactify = require('reactify');

/**
 * gulp.task():
 * 	- this declares a new task and tells gulp to look inside our project file directory
 * 	- if there is a task specifically called 'default' its immediately going to run this task
 * 	- the task tells gulp to go into our src directory, convert all the files from jsx to normal
 * 		javascript and then concatenate them all, than save that new file
 */
gulp.task('default', function() {
  // bundler is the object that actually executes the build and passed it some config options
  var bundler = watchify(browserify({
    // starting point of our application. Its the first file that browserify is going to look too
    // to determine how its going include all these different files together, remember its going
    // to use the 'require' statements to do that.
    entries: ['./src/app.jsx'],
    // tells browserify that while its figuring out our dependencies, it needs to transform or compile
    // our jsx to js using the reactify module
    transform: [reactify],
    // these are the files it needs to look at for the build process
    extensions: ['.jsx'],
    // these last ones are boiler plate
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  // here we define our build function to tell our bundler to do something
  // we rely on this build function to execute our bundler object and do our build process for us
  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      // this error handler helps us debug
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      // after bundle is completed put it all in a single file called main.js and put it in current
      // directory
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  }
  // immediately run build
  build();
  // on update (when ever make changes file) rebuild
  bundler.on('update', build);
});
