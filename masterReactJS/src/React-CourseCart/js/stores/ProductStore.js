var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('underscore');

// Define initial data points
var _courses = {}, _selected = null;

// Method to load product data from mock API
function loadProductData(data) {
  _courses = data;
  _selected = data[0];
}

// Method to set the currently selected product variation
function setSelected(index) {
  _selected = _courses[index];
}


// Extend ProductStore with EventEmitter to add eventing capabilities
var ProductStore = _.extend({}, EventEmitter.prototype, {

  // Return Product data
  getProduct: function() {
    return _courses;
  },

  // Return selected Product
  getSelected: function(){
    return _selected;
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    // Respond to RECEIVE_DATA action
    case FluxCartConstants.RECEIVE_DATA:
      loadProductData(action.data);
      break;

    // Respond to SELECT_courses action
    case FluxCartConstants.SET_SELECTED:
      setSelected(action.data);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  ProductStore.emitChange();

  return true;

});

module.exports = ProductStore;
