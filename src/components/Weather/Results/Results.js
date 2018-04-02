import React from "react";
import Clouds from "../../../assets/images/weather/Clouds.jpg";
import Sunny from "../../../assets/images/weather/Sunny.jpg";
import Clear from "../../../assets/images/weather/Clear.jpg";
import Rain from "../../../assets/images/weather/Rain.jpg";
import Snow from "../../../assets/images/weather/Snow.jpg";
import Haze from "../../../assets/images/weather/Haze.jpg";
//import Thunderstorm from "../../../assets/images/weather/Thunderstorm.jpg";

const results = (props) => {
	const weatherData = props.weatherData;
	const temp = weatherData.main.temp;
	const tempMax = weatherData.main.temp_max;
	const tempMin = weatherData.main.temp_min;
	const main = weatherData.weather[0].main;
	const calcF = (temp) => {
		return Math.round((temp * 1.8) + 32);
	};
	let image = null;
	switch(main) {
		case "Clouds":
			image = Clouds;
			break;
		case "Sunny":
			image = Sunny;
			break;
		case "Clear":
			image = Clear;
			break;
		case "Rain":
			image = Rain;
			break;
		case "Snow":
			image = Snow;
			break;
		case "Haze":
			image = Haze;
			break;
		/*case "Thunderstorm":
			image = Thunderstorm;
			break;*/
		default:
			break;
	}
	return (
		<div className="card horizontal z-depth-2">
			<div className="card-stacked">
				<div className="card-content center">
					<br/>
					<h4>Weather in <span>{weatherData.name}</span></h4>
					<h5>{weatherData.weather[0].main} at {props.metric ? temp : calcF(temp)}&deg;{props.metric ? "C" : "F"}</h5>
					<div className="divider"></div>
					<p>High: {props.metric ? tempMax : calcF(tempMax)}&deg;{props.metric ? "C" : "F"}</p>
					<p>Low: {props.metric ? tempMin : calcF(tempMin)}&deg;{props.metric ? "C" : "F"}</p>
					<p>Humidity: {weatherData.main.humidity}%</p>
					<br/>
					<button className="btn app-btn" onClick={() => props.toggleScale()}>
						{props.metric ? "Fahrenheit" : "Celsius"}
					</button>
					<br/><br/>
					<p>Data provided by <a href="https://www.freecodecamp.org">FreeCodeCamp</a></p>
				</div>
			</div>
			<div className="card-image">
				<img id="weatherPic" src={image} alt="Farzana" className="responsive-img" />
			</div>
		</div>
	);
};

export default results;