var SimpleMixin = {
    getDefaultProps: function () {
        return {name: "Skillbakery"};
    }
};

var NestedMixin = {
    mixins:[SimpleMixin]
};

var AuthorMixin = {
    getDefaultProps: function () {
        return {author: "Skillbakery.com"};
    }
};

var Courses = React.createClass({ 
mixins:[SimpleMixin,AuthorMixin],
//getDefaultProps:function(){
//  return {
//      name: "Udemy",
//      author: "Skillbakery"
//  };
//},
   render: function() {
    return (
      <p>
        Course will be availble on {this.props.name}
        <br/>
        Authored by {this.props.author}
      </p>
      );
   }
});

var Students = React.createClass({
   mixins:[SimpleMixin],
   render: function() {
    return (
      <p>
       Students says I love {this.props.name}
      </p>
      );
   }
});
React.render(<Courses />,document.getElementById("divContainer"));
React.render(<Students />,document.getElementById("divStudentContainer"));