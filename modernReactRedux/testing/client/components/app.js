import React, { Component } from 'react';
import CommentBox from './commentBox';
import CommentList from './commentList';

export default class App extends Component { // eslint-disable-line
  render() {
    return (
      <div>
        <h1> React simple starter </h1>
        {this.props.children}
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
