var CustomerCollection = React.createClass({displayName: "CustomerCollection",
   getInitialState: function() {
            return {customer:[]};
   },
   componentDidMount: function() {
    var url="http://services.odata.org/V4/Northwind/Northwind.svc/Customers";
    $.get(url, function(result) {
      var data=result;
      var customerlist = data.value;

      if (this.isMounted()) {
        this.setState({
                customer:customerlist
        });
      }
    }.bind(this));
  },
   render: function () { 
      return (React.createElement("div", null, 
                    React.createElement(Customers, {customer: this.state.customer})
            ))
    }
});

var Customers=React.createClass({displayName: "Customers",
    render:function(){
       var customer=this.props.customer.map(function(customer){
             return React.createElement(Customer, {CustomerID: customer.CustomerID, CompanyName: customer.CompanyName, ContactName: customer.ContactName})
        });
   
       return (React.createElement("div", null, " ", customer, " "))
    }
});

var Customer = React.createClass({displayName: "Customer",
    render:function(){
       return React.createElement("div", null, 
            React.createElement("span", null, "Customer ID"), " ", this.props.CustomerID, 
            React.createElement("br", null), 
            React.createElement("span", null, "Company Name"), " ", this.props.CompanyName, 
            React.createElement("br", null), 
            React.createElement("span", null, "Contact Name"), " ", this.props.ContactName, 
            React.createElement("p", null, " ")
        )
    }    
});

React.render(React.createElement(CustomerCollection, null),document.getElementById('divContainer'));