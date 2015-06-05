'use strict';

var React = require('react'),
    PubSub = require('../utils/PubSub');

module.exports = React.createClass({
    displayName: 'Highlighter',

    mixins: [PubSub],

    getInitialState: function () {
      return {
        direction: 'to-right',
        styles: {
          display: 'none',
          left: 0,
          right: 0
        },
        Highlighter: false
      };
    },

    componentDidMount: function () {
      var self = this;

      self.subscribe('highlighterCSS:'+self.props.id, function (target) {
        var targetLeft = target.element.parentNode.offsetLeft,
            stateLeft = self.state.styles.left;

        self.setState({
          direction: targetLeft <= stateLeft  ? 'to-left' : 'to-right',
          styles: {
            display: target.display,
            left: target.left,
            right: target.right
          },
          highlighter: self
        });
      });
    },

    render: function () {
      var self = this;

      return (
        <div
          id={'highlighter_for_' + self.props.id}
          key={self.props.id}
          className={'e-tabs-highlighter ' + self.state.direction}
          style={self.state.styles}>
        </div>
      );
    }
});
