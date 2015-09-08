var React = require('react');
var Router = require('react-router');
// where ever we see an anchor tag <a></a> will put Link instead and instead of href
// we'll assign a to
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return <nav className="navbar navbar-default header">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Imgur browser
        </Link>
        <ul className="nav navbar-nav navbar-right">
          <li> <a>Topic #1</a> </li>
        </ul>
      </div>
    </nav>
  }
})
