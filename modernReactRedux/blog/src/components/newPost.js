import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class NewPost extends Component {
  // using contextTypes for routing after we successfully submit form
  static contextTypes = {
    router: PropTypes.object,
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

  render() {
    // same as doing const handleSubmit = this.props.handleSubmit;
    // same as doing const title = this.props.fields.title
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    // adding alternative option for danger and success errors
    const dangerStyle = `form-group ${title.touched && title.invalid ? 'has-danger' : ''}`;
    const successStyle = `form-group ${title.touched && title.valid ? 'has-success' : ''}`;

    // console.log(title); // title configuration object

    // using destructoring object in input tag with {...title} which allows every
    // property on the title object to show up inside the input, so it destructures
    // the object into its seperate keys and values and passes it into the input.
    // So in effect all the properties we saw in our console.log above like
    // onChange, onBlur, etc show up inside our input
    // passing in our action creator in handleSubmit()
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a New Post</h3>

        <div className={title.touched && title.invalid ? dangerStyle : successStyle}>
          <label className="form-control-label" htmlFor="inputDanger1">Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-danger">
          {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label className="form-control-label" htmlFor="inputDanger1">categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-danger">
          {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label className="form-control-label" htmlFor="inputDanger1">content</label>
          <textarea className="form-control" {...content} />
          <div className="text-danger">
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
    errors.title = 'Enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
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
