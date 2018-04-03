import React, { Component } from "react";
import axios from "axios";
import Weather from "../../components/Weather/Weather";

class WeatherApp extends Component {
	state = {
		loading: true,
		metric: true,
		weatherData: null
	};
	componentDidMount() {
		this.getWeatherData();
	}

	//using navigator.geolocation, get position, request data from FreeCodeCamp Weather API and set it to state and remove loading state
	getWeatherData = () => {
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(position => {
				const lon = position.coords.longitude;
				const lat = position.coords.latitude;
				axios
					.get(
						"https://fcc-weather-api.glitch.me/api/current?lon=" +
							lon +
							"&lat=" +
							lat
					)
					.then(response => {
						this.setState({
							loading: false,
							weatherData: response.data
						});
					})
					.catch(err => {
						console.log("Error in weather retrieval", err);
					});
			});
		} else {
			alert("Sorry, geolocation is required for this app to function.");
		}
	};

	toggleTempScale = () => {
		this.setState(prevState => {
			return { metric: !prevState.metric };
		});
	};

	render() {
		return (
			<Weather
				loading={this.state.loading}
				weatherData={this.state.weatherData}
				metric={this.state.metric}
				toggleScale={this.toggleTempScale}
			/>
		);
	}
}

export default WeatherApp;
