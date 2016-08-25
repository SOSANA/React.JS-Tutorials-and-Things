import React, { Component } from 'react';
import Header from './header';

export class App extends Component { // eslint-disable-line
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
