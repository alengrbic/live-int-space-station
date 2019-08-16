//CREATE MAP
import React, { Component } from "react";
import Leaf from "leaflet";

export class Map extends Component {
  componentDidMount() {
    setTimeout(() => {
      let map = Leaf.map("map", {
        center: [this.props.lat, this.props.long],
        zoom: 3
      });

      Leaf.tileLayer(
        "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibGVuaGF0dGVyIiwiYSI6ImNqemQ0MXN0eTAyeTkzZHF0N2hrYXJ0OXAifQ.B1CbsLP5XDiqxf76mLG0EA",
        {
          maxZoom: 18,
          attribution:
            'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
          id: "mapbox.streets"
        }
      ).addTo(map);

      let circle = Leaf.circle([this.props.lat, this.props.long], {
        color: "red",
        fillColor: "#f03",
        fillOpacity: 0.5,
        radius: 200000
      }).addTo(map);

      setInterval(() => {
        let latlng = Leaf.latLng(this.props.lat, this.props.long);
        map.flyTo(latlng, 3);
        circle.setLatLng(latlng);
      }, 1000);
    }, 500);
  }

  render() {
    return <div id="map" style={{ height: "50vh", width: "50vw" }} />;
  }
}

export default Map;
