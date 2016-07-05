import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class NewPost extends Component {
  render() {
    // same as doing const handleSubmit = this.props.handleSubmit;
    // same as doing const title = this.props.fields.title
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    // console.log(title); // title configuration object

    // using destructoring object in input tag with {...title} which allows every
    // property on the title object to show up inside the input, so it destructures
    // the object into its seperate keys and values and passes it into the input.
    // So in effect all the properties we saw in our console.log above like
    // onChange, onBlur, etc show up inside our input
    // passing in our action creator in handleSubmit()
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
          {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
          {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">
          {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

// creting a validate function for our form validation
function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  }
  if (!values.categories) {
    errors.categories = 'Enter a categories';
  }
  if (!values.content) {
    errors.content = 'Enter a content';
  }

  return errors;
}

// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st argument is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

// like connect, redux form is injecting some helpers on this.props inside of NewPost Component
export default reduxForm({
  // setting up our redux form configuration
  form: 'NewPostForm', // NewPostForm is our unique token
  // defining the form fields
  fields: ['title', 'categories', 'content'],
  validate,
}, null, { createPost })(NewPost);
