import React, { Component } from 'react';

export default class App extends Component { // eslint-disable-line
  render() {
    return (
      <div>
        React simple starter
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
