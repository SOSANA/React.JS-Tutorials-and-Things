var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions');

// Flux product view
var FluxProduct = React.createClass({


  // Add item to cart via Actions
  addToCart: function(product){
    console.log(product);
    var CourseID = product.CourseID;
    var update = {
      title: product.title,
      price: product.price
    }
    FluxCartActions.addToCart(CourseID, update);
    FluxCartActions.updateCartVisible(true);
  },

  // Select product variation via Actions
  selectVariant: function(event){
    FluxCartActions.selectProduct(event.target.value);
  },

  // Render product View
  render: function() {
    var ats = 1;
     var self = this;
    return (
     
        <div className="col-md-10">
            <div className="row">
                    <section className="products">
                     {this.props.product.map(function(product){
                       
              return (
                        <div className="col-sm-4 col-md-4 product">
                            <div className="thumbnail">
                                <img src={'img/' + product.image} alt={product.title} className="img-responsive"/>
                                <div className="caption">
                                <span className="title">{product.title}</span>
                                <p>{product.description}<span className="price">${product.price}</span></p>
                                <div></div>
                                <p><input type="button" className="btn btn-success addproduct" onClick={self.addToCart.bind(self,product)} value="Add to Cart"/></p>
                                </div>
                            </div>
                        </div>
                        )
                        })}
                    </section>
             </div>
        </div>
     
    );
  },

});

module.exports = FluxProduct;