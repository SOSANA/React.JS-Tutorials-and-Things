/**
 * example of HOC:
 * in some other location (not in this file) we want to use this HOC
 * import Authentication // this is my HOC
 * import Resources // this is the component I want to wrap
 * const ComposedComponent = Authentication(Resources);
 * <ComposedComponent /> // in some other render method
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

// HOC purpose is to render a component that we pass to this function. The purpose
// of '...this.props' is to satisfy and props being passed down in the component
export default function (ComposedComponent) {
  class Authentication extends Component {
    // at time of render, only runs once
    componentWillMount() {
      // if the user is not authenticated route the use back to the root route
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    // after render, gets called when a component is about to get a new set of props
    componentWillUpdate(nextProps) {
      // if user views is looking at resources page and signs out, kick them out of page
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      // should log a function with props etc
      // console.log('Rendering', ComposedComponent);
      // should log boolean if logged in or out with sign in button
      // console.log(this.props.authenticated);
      // should log geting access to context to our router on context
      // console.log(this.context);
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authentication.propTypes = {
    authenticated: React.PropTypes.bool.isRequired,
  };

  Authentication.contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  function mapStateToProps(state) {
    return {
      authenticated: state.auth.authenticated,
    };
  }

  return connect(mapStateToProps)(Authentication);
}
