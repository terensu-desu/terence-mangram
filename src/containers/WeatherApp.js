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

	componentWillMount() {
		this.getWeatherData()
	}

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

	changeTempScale() {
		this.setState({
			metric: !this.state.metric
		});
	}

	render() {
		return this.state.loading ? <Loading /> : <Weather weatherData={this.state.weatherData} scale={this.state.metric} changeTempScale={this.changeTempScale} />
	}
}