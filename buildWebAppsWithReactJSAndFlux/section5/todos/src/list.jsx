var React = require('react');

module.exports = React.createClass({
  render: function() {
    // testing to see our objects 
    //console.log(this.props);
    return <ul>
      { this.renderList() }
    </ul>
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
      // get rendered inside our ul
      for(var key in this.props.items) {
        children.push(
          <li>
            {/* here we are saying look at the items object, access this given key and return the text property off of it */}
            { this.props.items[key].text }
          </li>
        )
      }
      
      return children;
    }
  }
});