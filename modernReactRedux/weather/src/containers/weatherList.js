import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class WeatherList extends Component {
  renderWeather(cityData) {
    // remember rule for adding key to a react listis you add to the top element
    // in the list and just has to be some unique piece of data
    const name = cityData.city.name;

    return (
      <tr key={name}>
        <td>
          {name}
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// this function is the glue between react and redux
// adding weather as a object which is same as doing state.weather
function mapStateToProps({ weather }) {
  // return weather as defined in index reducer
  // weather same as weather: weather
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
