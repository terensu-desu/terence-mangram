import React from "react";
import Loading from "../Loading/Loading";
import Results from "./Results/Results";

const weather = props => {
	let weatherView = <Loading />;
	if (!props.loading) {
		weatherView = (
			<Results
				weatherData={props.weatherData}
				metric={props.metric}
				toggleScale={props.toggleScale}
			/>
		);
	}
	return <div className="col s12 l6">{weatherView}</div>;
};

export default weather;
