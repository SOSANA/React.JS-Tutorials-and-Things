import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

import { FIELDS } from './newPostFields';

class NewPost extends Component {
  // using contextTypes for routing after we successfully submit form
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.renderField = this.renderField.bind(this);
  }

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => { // passing in our promise
        // blog post has been created, navigate the user to the index
        // we navigate by calling this.context.router.push with the new
        // path to navigate to
        this.context.router.push('/');
      });
  }

  renderField(fieldConfig, field) {
    // 'fieldHelper' is the object provided by redux-form
    const fieldHelper = this.props.fields[field];

    // using destructoring object in input tag with {...fieldHelper} which allows every
    // property on the title object to show up inside the input, so it destructures
    // the object into its seperate keys and values and passes it into the input.
    // So in effect all the properties we saw in our console.log above like
    // onChange, onBlur, etc show up inside our input
    // passing in our action creator in handleSubmit()
    // console.log(fieldHelper.name); // logs FIELDS object names
    const warning = `form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-warning' : ''}`;
    const success = `form-group ${fieldHelper.touched && fieldHelper.valid ? 'has-success' : ''}`;
    return (
      <div key={fieldHelper.name} className={`${warning} ? ${warning} : ${success}`}>
        <label>{fieldConfig.label}</label>
        <fieldConfig.type type="text" className="form-control" {...fieldHelper} />
        <div className="text-help">
        {fieldHelper.touched ? fieldHelper.error : ''}
        </div>
      </div>
    );
  }

  render() {
    // same as doing const handleSubmit = this.props.handleSubmit;
    const { handleSubmit } = this.props;
    // console.log(title); // title configuration object

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h3>Create a New Post</h3>

        {_.map(FIELDS, this.renderField)}

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

NewPost.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  fields: React.PropTypes.object.isRequired,
  createPost: React.PropTypes.func.isRequired,
};

// creating a validate function for our form validation
function validate(values) {
  const errors = {};

  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = `Enter a ${field}`;
    }
  });

  return errors;
}

// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st argument is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

// like connect, redux form is injecting some helpers on this.props inside of NewPost Component
export default reduxForm({
  // setting up our redux form configuration
  form: 'NewPostForm', // NewPostForm is our unique token
  // defining the form fields
  fields: _.keys(FIELDS), // will return an array of keys on all the fields on the configuration object
  validate,
}, null, { createPost })(NewPost);
