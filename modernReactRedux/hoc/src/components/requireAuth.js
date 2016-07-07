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
  class Authentication extends Component { //eslint-disable-line
    // using static syntax defines class level property. Using 'static contextTypes'
    // gives us the ability reference and access 'Authentication.contextTypes' any
    // where inside our application
    static contextTypes = {
      router: React.PropTypes.object,
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

  function mapStateToProps(state) {
    return {
      authenticated: state.authenticated,
    };
  }

  return connect(mapStateToProps)(Authentication);
}
