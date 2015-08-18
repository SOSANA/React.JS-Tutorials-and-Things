var Dispatcher = require('flux').Dispatcher;

// dispatcher instance
var AppDispatcher = new Dispatcher();

// method to handle dispatch requests
AppDispatcher.handleAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

module.exports = AppDispatcher;
