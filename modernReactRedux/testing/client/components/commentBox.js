import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/commentAction';

class CommentBox extends Component {
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
    const { saveComment } = this.props;
    // keep form from trying to submit itself
    e.preventDefault();
    saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="comment-box">
        <h4>Add a comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <div>
          <button action="submit">Submit Comment</button>
        </div>
      </form>
    );
  }
}

CommentBox.propTypes = {
  saveComment: React.PropTypes.func.isRequired,
};

export default connect(null, actions)(CommentBox);
