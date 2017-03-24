import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import Map from "../components/map";

class WeatherList extends Component {

  renderWeather(cityRow) {
    const name = cityRow.city.name;
    const temps = cityRow.list.map(w => w.main.temp);
    const humidities = cityRow.list.map(w => w.main.humidity);
    const pressures = cityRow.list.map(w => w.main.pressure);
    const { lon, lat } = cityRow.city.coord;

    return (
      <tr key={ name }>
        <td><Map lon={ lon } lat={ lat } /></td>
        <td><Chart data={ temps } color="orange" units="K" /></td>
        <td><Chart data={ humidities } color="red" units="hPa" /></td>
        <td><Chart data={ pressures } color="blue" units="%" /></td>
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
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);