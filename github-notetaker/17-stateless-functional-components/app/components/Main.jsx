import React from 'react';
import SearchGithub from './SearchGithub';

// stateless function - only has a render method or no methods at all
const Main = ({ children }) => {
  return (
    <div className="main-container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="col-sm-7 col-sm-offset-2" style={{ marginTop: 15 }}>
          <SearchGithub />
        </div>
      </nav>
      <div className="container">
        {children}
      </div>
    </div>
  );
};

export default Main;
