import React, { Component } from 'react';

export default class Weather extends Component {
	constructor() {
		super();
		this.handleWeatherIcon = this.handleWeatherIcon.bind(this);
	}

	componentDidMount() {
		this.handleWeatherIcon()
	}

	handleWeatherIcon() {
		const main = this.props.weatherData.weather[0].main;
		const image = document.getElementById("weatherPic");
		if(main === "Clouds") {
			image.setAttribute("src", "https://imgur.com/izW56El");
		}else if(main === "Sunny") {
			return "https://imgur.com/Jw1jyEb"
		}else if(main === "Clear") {
			return "https://imgur.com/lUyzPBV"
		}else if(main === "Rain") {
			return "https://imgur.com/ciMHslI"
		}else if(main === "Snow") {
			return "https://imgur.com/xGLOJ76"
		}
	}

	render() {
		const weatherData = this.props.weatherData;
		console.log(weatherData);
		const calcF = (temp) => {
			return (temp *   1.8) + 32;
		};
		const temp = weatherData.main.temp;
		const tempMax = weatherData.main.temp_max;
		const tempMin = weatherData.main.temp_min;
		return (
			<div className="card horizontal">
				<div className="card-stacked">
					<div className="card-content center">
						<h4>Weather in {weatherData.name}</h4>
						<h5>{weatherData.weather[0].main} at {this.props.scale ? temp : calcF(temp)}&deg;{this.props.scale ? "C" : "F"}</h5>
					</div>
				</div>
				<div className="card-image">
					<img id="weatherPic" src="#Farzana" alt="weather icon" />
				</div>
			</div>
		)
	}
}