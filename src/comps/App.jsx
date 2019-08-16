import React, { Component } from "react";
import Map from "./Map";

export class App extends Component {
  constructor() {
    super();
    this.handleIss = this.handleIss.bind(this);
  }

  state = {
    lat: null,
    long: null
  };

  async handleIss() {
    const response = await fetch(
      "https://api.wheretheiss.at/v1/satellites/25544"
    );
    let data = await response.json();
    this.setState({
      lat: data.latitude,
      long: data.longitude
    });

    setTimeout(() => {
      this.handleIss();
    }, 5000);
  }

  componentDidMount() {
    this.handleIss();
  }

  render() {
    return (
      <div>
        <h1>Current position of ISS (International Space Station)</h1>
        <h2>Latitude: {this.state.lat}</h2>
        <h2>Longitude: {this.state.long}</h2>
        <Map lat={this.state.lat} long={this.state.long} />
      </div>
    );
  }
}

export default App;
