var React = require('react');
var Router = require('react-router').Router;

var SearchGithub = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getRef: function(ref) {
    this.usernameRef = ref;
  },

  handleSubmit: function() {
    var username = this.usernameRef.value;
    this.usernameRef.value = '';
    this.context.router.push('profile/' + username, null);
  },

  render: function() {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={this.getRef} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    );
  },
});

module.exports = SearchGithub;
