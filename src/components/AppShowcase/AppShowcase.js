import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";

import WeatherApp from "../../containers/WeatherApp/WeatherApp";
import WikiApp from "../../containers/WikiApp/WikiApp";
import LeaderboardApp from "../../containers/LeaderboardApp/LeaderboardApp";
import RecipeApp from "../../containers/RecipeApp/RecipeApp";
import Aux from "../../hoc/Aux";

class AppShowcase extends Component {
	state = { page: 1 };
	
	advanceShowcasePage = () => {
		if(this.state.page === 2) {
			return false;
		}
		this.setState(prevState => {
			return { page: prevState.page + 1 };
		});
	};

	backShowcasePage = () => {
		if(this.state.page === 1) {
			return false;
		}
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
		return (
			<div className="section">
				<div className="card-container">
						<div className="row center no-margin-top no-margin-bot">
							<div className="col s6 l4 hide-on-med-and-down">
								<a className="btn app-btn" onClick={this.backShowcasePage}><i className="material-icons left">navigate_before</i>Previous</a>
	            </div>
	            <div className="col s12 l4">
	              <h3 className="no-margin-top no-margin-bot"><span>App Showcase</span></h3>
	            </div>
	            <div className="col s6 l4 hide-on-med-and-down">
		            <a className="btn app-btn" onClick={this.advanceShowcasePage}>Next<i className="material-icons right">navigate_next</i></a>
	            </div>
	          </div>
	          <div className="row hide-on-large-only show-on-medium-and-down center">
		          <div className="col s6">
	          		<a className="btn app-btn" onClick={this.backShowcasePage}><i className="material-icons left">navigate_before</i>Previous</a>
	          	</div>
	          	<div className="col s6">
	          		<a className="btn app-btn" onClick={this.advanceShowcasePage}>Next<i className="material-icons right">navigate_next</i></a>
	          	</div>
	          </div>
	          <hr/>
						<div className="row">
							<CSSTransitionGroup
								component={Aux}
			          transitionName="fade"
			          transitionEnterTimeout={1000}
			          transitionLeaveTimeout={500}>
			          {showcase}
			        </CSSTransitionGroup>
						</div>
				</div>
			</div>
		)
	}
}

export default AppShowcase;
