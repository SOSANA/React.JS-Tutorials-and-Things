/*
 * Example of cloning a reactjs component
 *  - these are add-ons that are accessible with the react-with-addons-0.13.1.js src file
 *  - we are using React.addons.cloneWithProps() that accepts a react element parameter and
 *    as a second argument accepts key and ref. You could of specified a key property in render
 *    or any unique property that was a part of the orginal element. 
 *    Example: React.addons.cloneWithProps(formElement, {key:formElement});
 *  - key and ref are not transfered from the original element to the cloned element. You can 
 *    preserve the key by passing in the second parameter
 */
var Form = React.createClass({
   
   render: function() {
     
      return ( 
            <div>
                  Cloning React Element
                  <form>
                    <label>Name </label> <input type="text" placeholder="Enter Your Name" />
                    <br/>
                    <label>Email </label> <input type="email" placeholder="Enter Your Email" />
                  </form>
            </div> 
            );
    }
});


var formElement = <Form />;
// passing in a react element to the parameter
// can also pass in key property React.addons.cloneWithProps(formElement, {key:formElement.whatever});
var cloneElement = React.addons.cloneWithProps(formElement);

React.render(formElement,document.getElementById('divContainer'));
React.render(cloneElement,document.getElementById('divCloneContainer'));