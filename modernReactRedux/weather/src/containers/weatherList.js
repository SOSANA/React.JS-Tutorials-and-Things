import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'; // reusable chart component

class WeatherList extends Component {
  renderWeather(cityData) {
    // pulls city name from weather api object
    const name = cityData.city.name;
    // maps through weather api object and pulls temperature into an array
    // maps through weather api object and pulls pressure into an array
    // maps through weather api object and pulls humidity into an array
    const temps = cityData.list.map(weather => weather.main.temp);
    // console.log(temps); // shows array of temps in calvin
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="orange" units="k" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
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
