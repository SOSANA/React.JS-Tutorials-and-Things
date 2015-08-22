// define a 'class' using the react method createClass and must always
// contain a render method. Always capitlize for class
 var Badge = React.createClass({
   render: function() {
     return <button class="btn btn-primary" type="button">
       Messages <span class="badge">4</span>
     </button>
   }
 });

 // react, please render this instance of our class
 var element = React.createElement(Badge);

 // react, after you render this class, please place it in my body tag
 // takes two arugments, instance of class and target to where it should
 // be rendered too
 React.render(element, document.body);
