'use strict';

var React = require('react/addons');

module.exports = React.createClass({
    displayName: 'Input',

    getInitialState: function() {
      return {
        children: []
      };
    },

    renderChildren: function () {
      var self = this,
          childrens = React.Children.count(self.props.children),
          children = [];

      if (childrens === 1) {
        children.push(self.props.children);
      } else {
        self.props.children.map(function (item) {
          children.push(item);
        });
      }

      return children;
    },

    componentWillReceiveProps: function () {
      var self = this;
      self.renderChildren();
    },

    render: function () {
      var self = this;

      return (<div>{self.renderChildren()}</div>);
    }
});
