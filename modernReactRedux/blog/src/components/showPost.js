import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class ShowPost extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  // using contextTypes for routing after we successfully submit form
  static contextTypes = {
    router: PropTypes.object,
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
    .then(() => { // passing in our promise
      // blog post has been deleted, navigate the user to the index
      // we navigate by calling this.context.router.push with the new
      // path to navigate to
      this.context.router.push('/');
    });
  }

  render() {
    // same as doing const post = this.props.post;
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    // console.log(this.props.post); // view post object

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(ShowPost);
