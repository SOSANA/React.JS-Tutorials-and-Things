var Weather = React.createClass({displayName: "Weather",
   
   render: function() {
     
      return ( 
            React.createElement("div", null, 
                   "Using Dangerously SetInnerHTML" + ' ' +
                   "Temperature is ", React.createElement("div", {dangerouslySetInnerHTML: getTemperature()})
            ) 
            );
    }
});

function getTemperature()
{
    return {__html: '20 &deg;  C'};
}
React.render(React.createElement(Weather, null),document.getElementById('divContainer'));