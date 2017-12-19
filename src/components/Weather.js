import React, { Component } from 'react';

export default class Weather extends Component {
	constructor() {
		super();
		
	}

	render() {
		const weatherData = this.props.weatherData;
		return (
			<div>
				<div className="col s12">
					<h2>Weather for {weatherData.name}</h2>
					<h4>{weatherData.weather[0].main}</h4>
				</div>
				<div className="col s12">
					
				</div>
			</div>
		)
	}
}