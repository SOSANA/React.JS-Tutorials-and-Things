import React, { Component } from 'react';
import CommentBox from './commentBox';
import CommentList from './commentList';

export default class Welcome extends Component { // eslint-disable-line
  render() {
    return (
      <div>
        <h3 className="test">Welcome to our slice of paradise</h3>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}
