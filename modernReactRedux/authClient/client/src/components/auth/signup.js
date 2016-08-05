import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm } } = this.props;
    // console.log({ ...password }); // log password object
    return (
      <form>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" {...email} type="email" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" {...password} type="password" />
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>PasswordConfirm:</label>
          <input className="form-control" {...passwordConfirm} type="password" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign up</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  // console.log(formProps); // see form event logs

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  // by default always return our errors
  return errors;
}

Signup.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  fields: React.PropTypes.object.isRequired,
  validate: React.PropTypes.func,
  //signupUser: React.PropTypes.func.isRequired,
  //errorMessage: React.PropTypes.string,
};

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate,
})(Signup);
