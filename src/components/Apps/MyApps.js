import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactTransitionGroup from 'react-transition-group';

import LeaderboardApp from '../../containers/LeaderboardApp';
import RecipeAppContainer from '../../containers/RecipeAppContainer';
import WeatherApp from '../../containers/WeatherApp';
import WikiApp from '../../containers/WikiApp';

export default class MyApps extends Component {
	render() {
    const data = this.props.displayData;
		return (
			<Router>
				<div className="card-panel">
					<div className="row center no-margin-top no-margin-bot">
            <div className="col s12">
              <h3 className="no-margin-top no-margin-bot"><span>React Apps</span></h3>
              <hr className="small-hr"/>
            </div>
          </div>

					<div className="row">
						<WeatherApp />
						<WikiApp />
					</div>
					<div className="row">
						<LeaderboardApp />
						<RecipeAppContainer />
					</div>
				</div>
			</Router>
		)
	}
}