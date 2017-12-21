import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import Weather from '../components/Weather';

export default class WeatherApp extends Component {
	constructor() {
		super();
		this.state = {
			loading: true,
			metric: true,
			weatherData: {},
		}
		this.getWeatherData = this.getWeatherData.bind(this);
	}

	// call weather data retrieval function
	componentWillMount() {
		this.getWeatherData()
	}

	// using navigator.geolocation, get position, request data from FreeCodeCamp Weather API and set it to state and remove loading state
	getWeatherData() {
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				const lon = position.coords.longitude;
				const lat = position.coords.latitude;
				axios.get("https://fcc-weather-api.glitch.me/api/current?lon=" + lon + "&lat=" + lat)
					.then((response) => {
						this.setState({
							loading: false,
							weatherData: response.data
						})
					})
					.catch((err) => {
						console.log("Error in weather retrieval", err)
					})
			})
		} else { alert("Sorry, geolocation is required for this app to function.")}
	}

	// record old state for metric, set the state to the opposite of that
	toggleTempScale() {
		const oldMetricState = this.state.metric;
		this.setState({
			metric: !oldMetricState
		});
	}

	render() {
		return (
			<div className="col s12 l6">
			 {
			 	this.state.loading 
			 		? <div className="card-panel center"><br/><Loading /></div>
			 		: <Weather weatherData={this.state.weatherData} scale={this.state.metric} toggleTempScale={() => this.toggleTempScale()} />
			 	}
			</div>
		)
	}
}