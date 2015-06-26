/*
 * DOM event listeners that can be implemented in a component
 * 
 * Special Non-DOM Att
 *  - key
 *  - ref
 *  - dangerously SetInnerHTML
 */
var Window = React.createClass({
  getInitialState: function() {
    return {windowWidth: window.innerWidth};
  },

  handleResize: function(e) {
    this.setState({windowWidth: window.innerWidth});
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
    
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },

  render: function() {
    return  <div>
                Current window width is: {this.state.windowWidth}
            </div>;
  }
});

React.render(<Window/>, document.getElementById('divContainer'));