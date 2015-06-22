var CustomerCollection = React.createClass({
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
      return (<div>
                    <Customers customer={this.state.customer} />
            </div>)
    }
});

var Customers=React.createClass({
    render:function(){
       var customer=this.props.customer.map(function(customer){
             return <Customer CustomerID={customer.CustomerID} CompanyName={customer.CompanyName} ContactName={customer.ContactName} />
        });
   
       return (<div> {customer} </div>)
    }
});

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