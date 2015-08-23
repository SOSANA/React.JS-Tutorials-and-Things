var options = {
  thumbNailData: [{
    title: 'See Tutorials',
    number: 12,
    header: 'Learn React',
    description: 'React is a fantastic new library for making fast, dynamic pages. React is a fantastic new library for making fast, dynamic pages.',
    imageUrl: 'http://formatjs.io/img/react.svg'
  },{
    title: 'See Tutorials',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development work flow. Gulp will speed up your development work flow',
    imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
  }]
};

// react, please render this class
var element = React.createElement(ThumbNailList, options);

// react, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.container'));

var Badge = React.createClass({displayName: "Badge",
  render: function() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
    )
  }
});

var ThumbNailList = React.createClass({displayName: "ThumbNailList",
  render: function() {
    var list = this.props.thumbNailData.map(function(thumbNailProps){
      return React.createElement(ThumbNail, React.__spread({},  thumbNailProps))
    });

    return React.createElement("div", null, 
      list
    )
  }
});

var ThumbNail = React.createClass({displayName: "ThumbNail",
    render: function() {
      return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
        React.createElement("div", {className: "thumbnail"}, 
          React.createElement("img", {src: this.props.imageUrl, alt: "..."}), 
          React.createElement("div", {className: "caption"}, 
            React.createElement("h3", null, this.props.header), 
            React.createElement("p", null, this.props.description), 
            React.createElement("p", null, 
              React.createElement(Badge, {title: this.props.title, number: this.props.number})
            )
          )
        )
      )
    }
});
