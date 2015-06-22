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