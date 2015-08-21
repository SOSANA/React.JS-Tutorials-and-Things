 // define a 'class' using the react method createClass and must always
 // contain a render method 
  var HelloWorld = React.createClass({
    render: function() {
      return <div>
        <h1> Hello World! </h1>
      </div>
    }
  });
  
  // react, please render this instance of our class
  var element = React.createElement(HelloWorld);
  
  // react, after you render this class, please place it in my body tag
  // takes two arugments, instance of class and target to where it should 
  // be rendered too
  React.render(element, document.body);