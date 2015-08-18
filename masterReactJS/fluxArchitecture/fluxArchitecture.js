/* 
Actions - Helper methods that allows passing data to the Dispatcher

Dispatcher – Receives actions and broadcasts payloads to registered callbacks

Stores – Containers for application state & logic that have callbacks registered to the dispatcher

Views – React Components that grab the state from Stores and pass it down using props (properties) to child components.
*/

var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

module.exports = AppDispatcher;

CourseStore.dispatcherIndex = AppDispatcher.register(function(payload) {
    switch(action.actionType) {
    case 'BUY_COURSE':
      AppDispatcher.waitFor([
        CourseStore.dispatcherIndex
      ], function() {
        CheckoutStore.purchaseCourses(CourseStore.getSelectedCourses());
      });
      break;
    }
});




  //Store example
var AppDispatcher = require('../dispatcher/AppDispatcher');
var CourseConstants = require('../constants/CourseConstants');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');


// Internal object of shoes
var _courses = {};

// Method to load shoes from action data
function loadCourses(data) {
  _courses = data.courses;
}

// Merge our store with Node's Event Emitter
var CourseStore = merge(EventEmitter.prototype, {

  // Returns all shoes
  getCourses: function() {
    return _courses;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register dispatcher callback
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;
  // Define what to do for certain actions
  switch(action.actionType) {
    case CourseConstants.LOAD_COURSES:
      // Call internal method based upon dispatched action
      loadCourses(action.data);
      break;

    default:
      return true;
  }
  
  // If action was acted upon, emit change event
  CourseStore.emitChange();

  return true;

});

module.exports = CourseStore;

var keyMirror = require('react/lib/keyMirror');

module.exports = keyMirror({
  LOAD_COURSES: null
});


var AppDispatcher = require('../dispatcher/AppDispatcher');
var CourseStoreConstants = require('../constants/CourseStoreConstants');

var CourseStoreActions = {

  loadShoes: function(data) {
    AppDispatcher.handleAction({
      actionType: CourseStoreConstants.LOAD_COURSES,
      data: data
    })
  }

};

module.exports = CourseStoreActions;

var React = require('react');
var CoursesStore = require('../stores/CourseStore');

// Method to retrieve application state from store
function getAppState() {
  return {
    Courses: CourseStore.getCourses()
  };
}

// Create our component class
var CourseStoreApp = React.createClass({

  // Use getAppState method to set initial state
  getInitialState: function() {
    return getAppState();
  },
  
  // Listen for changes
  componentDidMount: function() {
    CourseStore.addChangeListener(this._onChange);
  },

  // Unbind change listener
  componentWillUnmount: function() {
    CoursesStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <CourseStore Courses={this.state.Courses} />
    );
  },
  
  // Update view state when change event is received
  _onChange: function() {
    this.setState(getAppState());
  }

});

module.exports = CourseStoreApp;