/*
 * DOM event listeners that can be implemented in a component
 * 
 * Special Non-DOM Att
 *  - key
 *    - this is optional
 *    - this is a unique identifier
 *    - when ever your component shuffles around during render it might be destroyed and 
 *      recreated do to the diff algorithm. Assigning it a key that persist makes sure
 *      the component stays.
 *  - ref
 *    - This special property allows you to refer to the corresponding backing instance 
 *        of anything returned from render(). It is always guaranteed to be the proper instance, 
 *        at any point in time.
 *    - this identifies a particular node and call functions on that node example:
 *        <input ref="myInput" />
 *        this.refs.myInput
 *        React.findDOMNode(this.refs.myInput).
 *    - example shown in /dom folder
 *    - more info @ https://facebook.github.io/react/docs/more-about-refs.html
 *  - dangerously SetInnerHTML
 *    - this provides the ability insert raw html and mainly for incorporating DOM string 
 *      manipulation librares
 *    - example shown in /innerHTML folder
 * 
 * These events are not included in reactjs ex; "resize" event handlers. This implementation is
 * also good for integration with other libraries such as jquery.
 */
// creating a classs called window
var Window = React.createClass({
  // setting the window width state by using getInitialState and accessing the window object browser
  // window.innerWidth will get the width of the browser window. We than assign it to windowWidth
  getInitialState: function() {
    return {windowWidth: window.innerWidth};
  },
  // this function sets the window width variable to current state
  handleResize: function(e) {
    this.setState({windowWidth: window.innerWidth});
  },
  // componentDidMount is invoked once only on the client, not on the server. This gets called after
  // the component is mounted and has a DOM representation. This is where can attach DOM events.
  // soon as we resize the window handleResize function gets called and resized
  // when the component is mounted we are adding resize event handler
  // when we resize the browswer window the handleResize function gets called and we reset the new
  // window width and that gets displayed in the render function
  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
    
  },
  // componentWillUnmount is invoked once both on the client and on the server
  // when the component is unmounted than we are removing the resize event handler
  // when we resize the browswer window the handleResize function gets called and we remove the old
  // window width 
  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },
  // once the getInitialState is assigned, inside the render function we are are displaying the window
  // width from the windowWidth variable
  render: function() {
    return  <div>
                Current window width is: {this.state.windowWidth}
            </div>;
  }
});
// rendering window class inside the div container
React.render(<Window/>, document.getElementById('divContainer'));