var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <nav className="navbar navbar-default header">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          Imgur browser
        </a>
        <ul className="nav navbar-nav navbar-right>
          <li> <a>Topic #1</a> </li>
        </ul>
      </div>
    </nav>
  }
})
