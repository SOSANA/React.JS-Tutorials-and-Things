import React, { Component } from 'react';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ comment: e.target.value });
  }

  handleSubmit(e) {
    // keep form from trying to submit itself
    e.preventDefault();
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="comment-box">
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <button action="submit">Submit Comment</button>
      </form>
    );
  }
}
