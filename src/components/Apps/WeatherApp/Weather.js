import React, { Component } from 'react';

export default class Weather extends Component {
	constructor() {
		super();
		this.handleWeatherIcon = this.handleWeatherIcon.bind(this);
	}

	// To display the weather picture based on the weather condition, wait until the component mounts so that the element has been created
	componentDidMount() {
		this.handleWeatherIcon()
	}

	handleWeatherIcon() {
		const main = this.props.weatherData.weather[0].main;
		const image = document.getElementById("weatherPic");
		if(main === "Clouds") {
			image.setAttribute("src", "https://i.imgur.com/GKGkr94.jpg");
		}else if(main === "Sunny") {
			image.setAttribute("src", "https://i.imgur.com/Jw1jyEb.jpg");
		}else if(main === "Clear") {
			image.setAttribute("src", "https://i.imgur.com/lUyzPBV.jpg");
		}else if(main === "Rain") {
			image.setAttribute("src", "https://i.imgur.com/ciMHslI.jpg");
		}else if(main === "Snow") {
			image.setAttribute("src", "https://i.imgur.com/xGLOJ76.jpg");
		}
	}

	render() {
		const weatherData = this.props.weatherData;
		const calcF = (temp) => {
			return Math.round((temp * 1.8) + 32);
		}
		const temp = weatherData.main.temp;
		const tempMax = weatherData.main.temp_max;
		const tempMin = weatherData.main.temp_min;
		return (
			<div className="card horizontal z-depth-2">
				<div className="card-stacked">
					<div className="card-content center">
						<br/>
						<h4>Weather in <span>{weatherData.name}</span></h4>
						<h5>{weatherData.weather[0].main} at {this.props.scale ? temp : calcF(temp)}&deg;{this.props.scale ? "C" : "F"}</h5>
						<div className="divider"></div>
						<p>High: {this.props.scale ? tempMax : calcF(tempMax)}&deg;{this.props.scale ? "C" : "F"}</p>
						<p>Low: {this.props.scale ? tempMin : calcF(tempMin)}&deg;{this.props.scale ? "C" : "F"}</p>
						<p>Humidity: {weatherData.main.humidity}%</p>
						<br/>
						<a className="btn app-btn" onClick={this.props.toggleTempScale}>{this.props.scale ? "Fahrenheit" : "Celsius"}</a>
						<br/><br/>
						<p>Data provided by <a href="https://www.freecodecamp.org">FreeCodeCamp</a></p>
					</div>
				</div>
				<div className="card-image">
					<img id="weatherPic" src="#Farzana" alt="weather" className="responsive-img" />
				</div>
			</div>
		)
	}
}