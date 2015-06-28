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


var formElement=<Form />;
var cloneElement=React.addons.cloneWithProps(formElement);

React.render(formElement,document.getElementById('divContainer'));
React.render(cloneElement,document.getElementById('divCloneContainer'));