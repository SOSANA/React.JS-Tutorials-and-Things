/**
 * Gulp file:
 * 	- remember that we use gulp as a skeleton to run our build process
 * 	- we require other plugins that work with gulp that tell it to do very specific steps/tasks
 */
var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');

/**
 * gulp.task():
 * 	- this declares a new task and tells gulp to look inside our project file directory
 * 	- if there is a task specifically called 'default' its immediately going to run this task
 * 	- the task tells gulp to go into our src directory, convert all the files from jsx to normal
 * 		javascript and then concatenate them all, than save that new file
 */
gulp.task('default', function() {
  // tells gulp to go into our src directory and load every file thats inside of our directory
  // ** means every file
  return gulp.src('src/**')
    // pipe basically means first do this, than do this next step, and than do following step etc
    // making use of require('gulp-react'); that turns every file form jsx to js
    .pipe(react())
    // for each js file we now have combine them all into a single file called application.js
    .pipe(concat('application.js'))
    // save this in the current project directory
    .pipe(gulp.dest('./'))
});
