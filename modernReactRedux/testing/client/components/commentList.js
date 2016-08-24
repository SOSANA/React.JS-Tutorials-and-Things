import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
  const list = props.comments.map(comment =>
    <div className="bg-primary">
      <li key={comment}>
      {comment}
      </li>
    </div>
  );
  return (
    <ul className="comment-list">{list}</ul>
    );
};

CommentList.propTypes = {
  comments: React.PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
