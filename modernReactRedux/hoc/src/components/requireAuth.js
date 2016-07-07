/**
 * example of HOC:
 * in some other location (not in this file) we want to use this HOC
 * import Authentication // this is my HOC
 * import Resources // this is the component I want to wrap
 * const ComposedComponent = Authentication(Resources);
 * <ComposedComponent /> // in some other render method
 */

import React, { Component } from 'react';

// HOC purpose is to render a component that we pass to this function
export default function (ComposedComponent) {
  class Authentication extends Component { //eslint-disable-line
    // the purpose of '...this.props' is to satisfy and props being passed down
    // in the component
    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  return Authentication;
}
