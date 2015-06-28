/*
var Form = React.createClass({
getInitialState: function() {
return { text: "" };
},
 
render: function() {

return <div>
        <input type="text" value={this.state.text}
        onChange={this.handleChange} />
        {this.state.text}
        </div>
},
 
handleChange: function(evt) {
this.setState({text: evt.target.value});
}
}); 
*/

var Form= React.createClass({
mixins: [React.addons.LinkedStateMixin],
 
getInitialState: function() {
return { text: "" };
},
 
render: function() {
return <div>
            <input type="text" valueLink={this.linkState("text")} />
             {this.state.text}
        </div>
}
});
/*
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
*/ 
React.render(<Form />,document.getElementById("divContainer"));
/*
{
value: ..., // current value of this.state[key]
requestChange: function() { ... } // function to call to update this.state[key]
} 
*/