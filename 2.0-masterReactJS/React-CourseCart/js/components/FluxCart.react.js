var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions');

// Flux cart view
var FluxCart = React.createClass({

  // Hide cart via Actions
  closeCart: function(){
    FluxCartActions.updateCartVisible(false);
  },

  // Show cart via Actions
  openCart: function(){
    FluxCartActions.updateCartVisible(true);
  },

  // Remove item from Cart via Actions
  removeFromCart: function(CourseID){
    FluxCartActions.removeFromCart(CourseID);
    FluxCartActions.updateCartVisible(false);
  },

  // Render cart view
  render: function() {
    var self = this, products = this.props.products;
    return (
  <div className="col-md-2">
   <div className="nav-list affix">
     <div id="BSCart" className="collections">
       <div className="BSCart_list">
         <div className="ShoppingCartHead">
                <img id="BSC_animation_cart" src="img/shoppingcart.png" alt="Shopping icon" /> Cart
         </div>
          <div>
            {Object.keys(products).map(function(product){
              return (
                <div key={product} className="ShoppingCart">
                  {products[product].title}
                  <br/>
                  <div>${(products[product].price).toFixed(2)}</div>
                  <div className="delete" onmouseout="this.style.cursor = 'pointer';" onmouseover="this.style.cursor = 'pointer';" onClick={self.removeFromCart.bind(self, product)}><span className="glyphicon glyphicon-remove"></span></div>
                </div>
              )
            })}
          </div>
          <div className="ShoppingCartFoot">
                <div id="BSC_animation_count">Total: ${this.props.total}</div>
           </div>
        </div>
     </div>
    </div>
  </div>

    );
  },

});

module.exports = FluxCart;