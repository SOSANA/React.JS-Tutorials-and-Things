/*
 * Two way data binding using LinkedStateMixin and validating properties
 *  - LinkedStateMixin is used for multiple components using mixins
 *  - LinkedStateMixin provides the handleChange event method and onChange event handler 
 *  - LinkedStateMixin uses valueLink={this.linkState("text")} instead of using
 *    value={this.state.text}. 
 *  - this is the object that is being returned by this.linkState
      {
        value: ..., // current value of this.state[key]
        requestChange: function() { ... } // function to call to update this.state[key]
      } 
 *  - these are add-ons that are accessible with the react-with-addons-0.13.1.js src file
 *  - mainly used for two way data binding to display and update the text but also used
 *    cloning components with React.addons.cloneWithProps. See /cloneComponent folder
 *    for example.
 *  - common in a component to contain state that should be editable by a child component 
 **/

// here is an form example using LinkedStateMixin which can be used for multiple components
// notice there is no handleChange method and OnChange event handler
var Form= React.createClass({
// using mixins method and adding LinkedStateMixin
mixins: [React.addons.LinkedStateMixin],

getInitialState: function() {
return { text: "" };
},
 
render: function() {
// using valueLink property and this.linkState("text"). The text is associated with valueLink
return <div>
            <input type="text" valueLink={this.linkState("text")} />
             {this.state.text}
        </div>
}
});
React.render(<Form />,document.getElementById("divContainer"));


/*
// here is a basic form example
var Form = React.createClass({
getInitialState: function() {
return { text: "" };
},
 
render: function() {
// we have a input element with a value and a onChange event handler to display and update
// the text
return <div>
        <input type="text" value={this.state.text}
        onChange={this.handleChange} />
        {this.state.text}
        </div>
},
// what ever text is entered in value this.state.text is updated in the handleChange event
// method and passed into this.setState
handleChange: function(evt) {
this.setState({text: evt.target.value});
}
}); 
React.render(<Form />,document.getElementById("divContainer"));
*/


/*
// this example shows the use of this.linkState object behind the scenes
var Form = React.createClass({
mixins: [React.addons.LinkedStateMixin],
 
getInitialState: function() {
return { text: "" };
},
 
render: function() {
var valueLink = this.linkState("text");
var handleChange = function(evt) {
valueLink.requestChange(evt.target.value);
};
 
return <input type="text" value={valueLink.value}
onChange={handleChange} />;
}
});
React.render(<Form />,document.getElementById("divContainer"));
*/ 

/*
// this is the object that is being returned by this.linkState
{
value: ..., // current value of this.state[key]
requestChange: function() { ... } // function to call to update this.state[key]
} 
*/