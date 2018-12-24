import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Map from '../components/Map';
import Chart from '../components/Chart';
import style from './WeatherList.module.css';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
          <Map lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temps} color="orange" />
        </td>
        <td>
          <Chart data={pressures} color="blue" />
        </td>
        <td>
          <Chart data={humidities} color="red" />
        </td>
      </tr>
    );
  }
  render() {
    return (
      <Fragment>
        {this.props.weather.length > 0 && (
          <table className={style.table}>
            <thead>
              <tr>
                <th>City</th>
                <th>Temperature</th>
                <th>Pressure</th>
                <th>Humidity</th>
              </tr>
            </thead>
            <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
          </table>
        )}
      </Fragment>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
