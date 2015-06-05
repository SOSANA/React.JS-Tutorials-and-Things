'use strict';

var React = require('react/addons'),
    BtnItem = require('./BtnItem'),
    PubSub = require('../utils/PubSub'),
    ClassNames = require('../utils/ClassNames'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'SnackbarItem',

    mixins: [PubSub, ClassNames],

    getInitialState: function() {
      return {
        style: {},
        classes: {
          'snackbar': true
        }
      };
    },

    componentDidMount: function () {
      var self = this,
          classes = ClassNames(self.state.classes, self.props.classes),
          height = parseInt(
            window.getComputedStyle (self.getDOMNode())
            .getPropertyValue('height').replace("px", "")
          ),
          lineHeight = parseInt(
              window.getComputedStyle (self.getDOMNode())
            .getPropertyValue('line-height').replace("px", "")
          );

      self.setState({
        classes: classes
      });

      // Subscribe to SnackBar show event
      self.subscribe('snackbar:'+self.props.id, function () {
        self.setState({
          style: {
            bottom: '0',
            opacity: 1,
            zIndex: 1
          }
        });

        if ( Math.floor(height / lineHeight) > 1 ) {

          if (!classes["snackbar-multiline"]) {
            classes["snackbar-multiline"] = true;
          }

          self.setState({
            classes: classes
          });
        }

        setTimeout(function() {
            self.setState({
              style: {}
            });
          },
          2000
        );
      });
    },

    actionBtn: function () {
      if (!this.props.action) {
        return null;
      }

      return (
        <button className={"e-btn-flat action"}>
          {this.props.action}
        </button>
      );
    },

    render: function () {
      var self = this,
          style = self.state.style,
          classes = classSet(self.state.classes);

      return (
        <div
          className={classes}
          id={self.props.id}
          style={style}
        >
          <div className={"snackbar-message"}>
            {self.props.children}
          </div>
          {self.actionBtn()}
        </div>
      );
    }
});
