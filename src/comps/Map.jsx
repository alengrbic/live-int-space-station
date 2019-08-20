import React, { Component } from "react";
import Leaf from "leaflet";
import "../styles/Map.css";

export class Map extends Component {
  componentDidMount() {
    let map = Leaf.map("map", {
      center: [this.props.lat, this.props.long],
      zoom: 3
    });

    Leaf.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibGVuaGF0dGVyIiwiYSI6ImNqemQ0MXN0eTAyeTkzZHF0N2hrYXJ0OXAifQ.B1CbsLP5XDiqxf76mLG0EA",
      {
        maxZoom: 3,
        minZoom: 3,
        attribution:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: "mapbox.streets"
      }
    ).addTo(map);

    let iSS = Leaf.icon({
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d0/International_Space_Station.svg",
      iconSize: [100, 100]
    });

    let myISS = Leaf.marker([this.props.lat, this.props.long], {
      icon: iSS
    }).addTo(map);

    setInterval(() => {
      let latlng = Leaf.latLng(this.props.lat, this.props.long);
      myISS.setLatLng(latlng);
    }, 1000);
  }

  render() {
    return (
      <div>
        <div
          id="map"
          style={{
            height: "50vh",
            width: "50vw",
            minWidth: "20rem",
            textAlign: "center"
          }}
        />
      </div>
    );
  }
}

export default Map;
