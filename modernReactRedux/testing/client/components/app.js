import React, { Component } from 'react';
import CommentBox from './commentBox';

export default class App extends Component { // eslint-disable-line
  render() {
    return (
      <div>
        React simple starter
        {this.props.children}
        <CommentBox />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
