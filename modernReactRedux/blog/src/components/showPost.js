import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class ShowPost extends Component {
  // using contextTypes for routing after we successfully submit form
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
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
    const { post } = this.props; // eslint-disable-line

    if (!post) {
      return <div>Loading...</div>;
    }

    // console.log(this.props.post); // view post object

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick}
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

ShowPost.propTypes = {
  fetchPost: React.PropTypes.func.isRequired,
  deletePost: React.PropTypes.func.isRequired,
  params: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(ShowPost);
