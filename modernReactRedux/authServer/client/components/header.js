import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component { // eslint-disable-line

  renderLinks() {
    if (this.props.authenticated) {
      // show a link to sign out
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/signout">Sign out</Link>
        </li>
      );
    }

    return [
      // show a link to sign in or sign up
      <li className="nav-item" key={1}>
        <Link className="nav-link" to="/signin">Sign In</Link>
      </li>,
      <li className="nav-item" key={2}>
        <Link className="nav-link" to="/signup">Sign Up</Link>
      </li>,
    ];
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Redux Auth</Link>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

Header.propTypes = {
  authenticated: React.PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps)(Header);
