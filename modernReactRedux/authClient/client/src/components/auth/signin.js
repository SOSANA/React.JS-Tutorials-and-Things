import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({ email, password }) {
    console.log(email, password); // eslint-disable-line no-console
    this.props.signinUser({ email, password });
  }

  render() {
    // from redux-form
    const { handleSubmit, fields: { email, password } } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input {...email} className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input {...password} className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

Signin.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  fields: React.PropTypes.object.isRequired,
  signinUser: React.PropTypes.func.isRequired,
};

// helper to declare the fields you need
export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
}, null, actions)(Signin);
