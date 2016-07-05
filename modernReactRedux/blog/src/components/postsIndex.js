import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'; // don't need this as per avoid boilerplate below
// this is the action creator we want to call inside of componentWillMount
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  // react lifecycle method to call an action creator to fetch our data (posts)
  // remember only called once at time of render
  componentWillMount() {
    // console.log('this will be good time to call an action creator to fetch posts');
    // action creator
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h1>List of blog posts...</h1>
      </div>
    );
  }
}

/*
function mapDispatchToProps(dispatch) {
  // remember this give us access to this.props.fetch.post
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsIndex);
*/

// avoiding above boilerplate
export default connect(null, { fetchPosts })(PostsIndex);
