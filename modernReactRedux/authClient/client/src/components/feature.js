import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div>
        {this.props.message}
      </div>
    );
  }
}

Feature.propTypes = {
  fetchMessage: React.PropTypes.func.isRequired,
  message: React.PropTypes.string,
};

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);
