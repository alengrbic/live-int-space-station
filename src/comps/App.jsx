import React, {Component} from "react";
import Map from "./Map";

// Style the app actually

export class App extends Component {
    constructor(props) {
        super(props);
        this.handleIss = this.handleIss.bind(this);
        this.handleCountry = this.handleCountry.bind(this);
    }

    state = {
        lat: null,
        long: null,
        velocity: null,
        altitude: null,
        country: "Fetching Location..."
    };

    async handleCountry() {
        const getCountry = await fetch(
            `https://eu1.locationiq.com/v1/reverse.php?key=8a059ce76eacaf&lat=${
                this.state.lat
            }&lon=${this.state.long}&addressdetails=1&format=json`
        );

        let countryData = await getCountry.json();

        if (countryData.address !== undefined) {
            this.setState({country: countryData.address.country});
        } else {
            this.setState({country: null});
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
        setTimeout(() => {
            this.handleCountry();
        }, 1000);
    }

    render() {
        let countrycode = "";
        if (this.state.country === null) {
            countrycode = <span>The ISS is above ocean.</span>;
        } else if (this.state.country === "Fetching Location...") {
            countrycode = <span>{this.state.country}.</span>;
        } else {
            countrycode = <span>The ISS is above {this.state.country}.</span>;
        }

        if (this.state.lat === null || this.state.long === null) {
            return <h1>Loading, please wait...</h1>;
        } else {
            return (
                <div className="container">
                    <div className={"header"}>
                        <div className={"title"}><h1>Current position of ISS</h1>
                            <span>(International Space Station)</span>
                        </div>
                        <ul className="row details">
                            <li className={"col-sm-3"}>Latitude: {this.state.lat} </li>
                            <li className={"col-sm-3"}>Longitude: {this.state.long} </li>
                            <li className={"col-sm-3"}>Altitude: {this.state.altitude} KM</li>
                            <li className={"col-sm-3"}>Velocity: {this.state.velocity} KM/H</li>
                            <li className={"col-sm-12"}>{countrycode}</li>
                        </ul>
                    </div>
                    <Map className="myMap" lat={this.state.lat} long={this.state.long}/>
                </div>
            );
        }
    }
}

export default App;
