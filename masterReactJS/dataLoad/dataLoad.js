/*
 * Using the jquery library with reactjs
 * Another example of child parent component communication
 * make sure to use http instead of https as it will block northwind url
 */

// this is using the Customers component
var CustomerCollection = React.createClass({
   getInitialState: function() {
            return {customer:[]};
   },
   // when we initalize the page with some inital data with componentDidMount
   // and when the response arrives you can store that data in state and than trigger a render 
   // to update your ui
   componentDidMount: function() {
    // using odata url and fetching customer list from northwind
    var url = "http://services.odata.org/V4/Northwind/Northwind.svc/Customers";
    // using the jquery get method we are getting the results and assigned to this.setState
    $.get(url, function(result) {
      var data = result;
      // what ever collection we got from this url is stored in customerlist
      var customerlist = data.value;
      // when processing the response of a async request you to check wither the data is still
      // mounted or not before updating the state by using this.isMounted().
      if (this.isMounted()) {
        // assigning the get method
        this.setState({
                // customer list is being assigned to customer array in getInitialState
                // this array is now able to be accessed by the render this.state.customer below
                customer: customerlist
        });
      }
    }.bind(this));
  },
   // this is returning the list of customers 
   render: function () { 
      return (<div>
                    // the states is defined in getInitialState as an empty array
                    // this.setState array is accessed here and assigned to customer property
                    // and than gets mapped in Customers and showed to the user in Customer
                    <Customers customer = {this.state.customer} />
            </div>)
    }
});
// This component defines the props for customers and than passes the values to customer
var Customers = React.createClass({
    render:function(){
       // here we are defining a property called customer and maping through
       var customer = this.props.customer.map(function(customer){
             return <Customer CustomerID = {customer.CustomerID} 
                              CompanyName = {customer.CompanyName} 
                              ContactName = {customer.ContactName} />
        });
   
       return (<div> {customer} </div>)
    }
});
// here we are displaying the properties from Customers component
var Customer = React.createClass({
    render:function(){
       return <div>
            <span>Customer ID</span> {this.props.CustomerID}
            <br/>
            <span>Company Name</span> {this.props.CompanyName}
            <br/>
            <span>Contact Name</span> {this.props.ContactName}
            <p>&nbsp;</p>
        </div>
    }    
});

React.render(<CustomerCollection  />,document.getElementById('divContainer'));