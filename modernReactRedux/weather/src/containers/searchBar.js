import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    // console.log(event.target.value);
    this.setState({ term: event.target.value });
  }


  onFormSubmit(event) {
    // tells the brower don't submit the form
    event.preventDefault();


    // hooking up our fetchWeather action creator
    this.props.fetchWeather(this.state.term); // eslint-disable-line
    // setting our state to input passed through onFormSubmit handler
    this.setState({ term: '' });
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

// binding fetchWeather to dispatch
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// passing in null as this container doesn't need any state here
// we get acess to fetchWeather action creator by connecting our component to mapDispatchToProps
export default connect(null, mapDispatchToProps)(SearchBar);
