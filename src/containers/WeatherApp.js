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
		return (
			<div className="card-panel">
				<div className="row">
					{
						this.state.loading 
						? <div className="col s12"> <Loading /> </div>
						: <Weather weatherData={this.state.weatherData} changeTempScale={this.changeTempScale} />
					}
				</div>
			</div>
		)
	}
}