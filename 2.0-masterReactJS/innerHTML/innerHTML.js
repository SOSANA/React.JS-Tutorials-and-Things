/*
 * Example using dangerously SetInnerHTML
 *  - by default reactjs does not allow you to set raw html as the inner html of component. One reason 
 *    why reactjs does not provide this is do to cross site scripting.
 *  - We to get around this we use the __html. This returns an html object rather than a plain string. The 
 *    intent behind using this it will be to pass in the dangerouslySetInnerHTML property and help pass XML
 *    validation this way you can make use of danerouslySetInnerHTML property in reactjs to make use of
 *    symbols like the degree symbol used below 
 */
var Weather = React.createClass({
   
   render: function() {
     
      return ( 
            <div>
                   Using Dangerously SetInnerHTML
                   Temperature is <div dangerouslySetInnerHTML={getTemperature()}></div>
            </div> 
            );
    }
});

function getTemperature()
{
    return {__html: '20 &deg;  C'};
}
React.render(<Weather />,document.getElementById('divContainer'));