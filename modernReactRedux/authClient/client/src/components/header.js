import React, { Component } from 'react';

class Header extends Component { // eslint-disable-line
  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            Sign in
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
