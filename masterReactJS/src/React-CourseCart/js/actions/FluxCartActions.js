var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxCartConstants = require('../constants/FluxCartConstants');

// Define action methods
var FluxCartActions = {

  // Receive inital product data
  receiveProduct: function(data) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.RECEIVE_DATA,
      data: data
    })
  },

  // Set currently selected product variation
  selectProduct: function(index) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.SELECT_PRODUCT,
      data: index
    })
  },

  // Add item to cart
  addToCart: function(CourseID, update) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_ADD,
      CourseID: CourseID,
      update: update
    })
  },

  // Remove item from cart
  removeFromCart: function(CourseID) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_REMOVE,
      CourseID: CourseID
    })
  },

  // Update cart visibility status
  updateCartVisible: function(cartVisible) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_VISIBLE,
      cartVisible: cartVisible
    })
  }

};

module.exports = FluxCartActions;
