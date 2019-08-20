import React, { Component } from "react";
import Map from "./Map";
import "../styles/App.css";

// Style the app actually

export class App extends Component {
  constructor() {
    super();
    this.handleIss = this.handleIss.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
  }

  state = {
    lat: null,
    long: null,
    velocity: null,
    altitude: null,
    country: null
  };

  async handleCountry() {
    const getCountry = await fetch(
      `https://eu1.locationiq.com/v1/reverse.php?key=8a059ce76eacaf&lat=${
        this.state.lat
      }&lon=${this.state.long}&addressdetails=1&format=json`
    );

    let countryData = await getCountry.json();

    if (countryData.address !== undefined) {
      this.setState({ country: countryData.address.country });
    } else {
      this.setState({ country: null });
    }

    setTimeout(() => {
      this.handleCountry();
    }, 10000);
  }

  async handleIss() {
    const response = await fetch(
      "https://api.wheretheiss.at/v1/satellites/25544"
    );
    let data = await response.json();

    this.setState({
      lat: data.latitude,
      long: data.longitude,
      velocity: data.velocity.toFixed(2),
      altitude: data.altitude.toFixed(2)
      /* country: countryData.countryName */
    });

    setTimeout(() => {
      this.handleIss();
    }, 5000);
  }

  componentDidMount() {
    this.handleIss();
    this.handleCountry();
  }

  render() {
    let countrycode = "";
    if (this.state.country === null) {
      countrycode = <p>The ISS is above ocean.</p>;
    } else {
      countrycode = <p>The ISS is above {this.state.country}.</p>;
    }

    if (this.state.lat === null || this.state.long === null) {
      return <h1>Loading, please wait...</h1>;
    } else {
      return (
        <div className="container">
          <h1>Current position of ISS (International Space Station)</h1>
          <div className="details">
            <h2>ISS Details: </h2>
            <p>Latitude: {this.state.lat} </p>
            <p>Longitude: {this.state.long} </p>
            <p>Altitude: {this.state.altitude} KM </p>
            <p>Velocity: {this.state.velocity} KM/H </p>
            {countrycode}
          </div>
          <Map className="myMap" lat={this.state.lat} long={this.state.long} />
        </div>
      );
    }
  }
}

export default App;
