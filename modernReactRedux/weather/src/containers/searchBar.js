/**
 * using form vs div we get out of the box handlers for click and enter without having
 * to create handlers for each. Use a form tag for any type of user input
 */

import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    // console.log(event.target.value);
    this.setState({ term: event.target.value });
  }


  onFormSubmit(event) {
    // tells the brower don't submit the form
    event.preventDefault();

    // fetch weather data
    // http://openweathermap.org/forecast5
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
