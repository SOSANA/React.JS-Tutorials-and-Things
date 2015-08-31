var React = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
  render: function() {
    // testing to see our objects 
    //console.log(this.props);
    return <div>
      { this.renderList() }
    </div>
  },
  // defining our helper method
  renderList: function() {
    // checking the 'this.props.items' object has any entries in it. We can get access to those list of entries
    // by using the javascript method Object.keys, and we pass this an object and that returns us a array of all
    // the keys
    if(this.props.items && Object.keys(this.props.items).length === 0) {
      return <h4>
        Add a todo to get started.
      </h4>
    } else {
      // making a new array
      var children = [];
      // We have 'this.props.items'object, each key represents a single item/todo/entry. We than loop over all the keys and 
      // than for each key, we are going to access the object that it represents and than access the text property. 
      // This will be put inside a li which in turn gets put inside of our children array and than the children array will 
      // get rendered inside our div
      for(var key in this.props.items) {
        // this item represents a single todo, we are grabbing the item in the array
        var item = this.props.items[key];
        // assigning the key on top of the item, we now have a property on our todo called 'key'
        item.key = key;
        // we than create a ListItem with a list and key that gets pushed in our children array and than gets rendered in
        // our render method to {this.renderList()}
        children.push(
          // here we are saying look at the items object, access this given key and return the text property off of it, 
          // by assigning this key property we avoid the warning msg. The warning means is to keep track of which item
          // in the list is which between renders of an component we need to manually specify a unique key, so the key has
          // to be unique, since our firebase keys are guranteed to be unique, we will be using that as our key */
          <ListItem
            item={item}
            key={key}
            >
          </ListItem>
        )
      }
      
      return children;
    }
  }
});