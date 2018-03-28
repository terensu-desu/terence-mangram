import React, { Component } from "react";

import WeatherApp from "../WeatherApp/WeatherApp";
import WikiApp from "../WikiApp/WikiApp";
import LeaderboardApp from "../LeaderboardApp/LeaderboardApp";
import RecipeApp from "../RecipeApp/RecipeApp";
import TwitchApp from "../TwitchApp/TwitchApp";
import CalculatorApp from "../CalculatorApp/CalculatorApp";
import Aux from "../../hoc/Aux";

class AppShowcase extends Component {
	state = { page: 1 };
	
	advanceShowcasePage = () => {
		this.setState(prevState => {
			return { page: prevState.page + 1 };
		});
	};

	backShowcasePage = () => {
		this.setState(prevState => {
			return { page: prevState.page - 1 };
		});
	};

	render() {
		let showcase = (
			<Aux>
				<RecipeApp />
				<WikiApp />
			</Aux>
		);
		if(this.state.page === 2) {
			showcase = (
				<Aux>
					<WeatherApp />
					<LeaderboardApp />
				</Aux>
			);
		}
		if(this.state.page === 3) {
			showcase = <TwitchApp />;
		}
		if(this.state.page === 4) {
			showcase = <CalculatorApp />;
		}
		let nextBtnClass = "btn app-btn";
		let backBtnClass = "btn app-btn";
		if(this.state.page === 4) {
			nextBtnClass = "btn app-btn disabled";
		}
		if(this.state.page === 1) {
			backBtnClass = "btn app-btn disabled";
		}
		return (
			<div className="section">
				<div className="card-container">
						<div className="row center no-margin-top no-margin-bot">
							<div className="col s6 l4 hide-on-med-and-down">
								<a className={backBtnClass} onClick={this.backShowcasePage}>
									<i className="material-icons left">navigate_before</i>Back
								</a>
	            </div>
	            <div className="col s12 l4">
	              <h3 className="no-margin-top no-margin-bot">
	              	<span>App Showcase</span>
	              </h3>
	            </div>
	            <div className="col s6 l4 hide-on-med-and-down">
		            <a className={nextBtnClass} onClick={this.advanceShowcasePage}>
		            	Next<i className="material-icons right">navigate_next</i>
		            </a>
	            </div>
	          </div>
	          <div className="row hide-on-large-only show-on-medium-and-down center">
		          <div className="col s6">
	          		<a className={backBtnClass} onClick={this.backShowcasePage}>
	          			<i className="material-icons left">navigate_before</i>Previous
	          		</a>
	          	</div>
	          	<div className="col s6">
	          		<a className={nextBtnClass} onClick={this.advanceShowcasePage}>
	          			Next<i className="material-icons right">navigate_next</i>
	          		</a>
	          	</div>
	          </div>
	          <hr/>
						<div id="app-showcase" className="row">
			        {showcase}
						</div>
				</div>
			</div>
		)
	}
}

export default AppShowcase;
