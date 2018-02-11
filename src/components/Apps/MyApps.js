import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

import LeaderboardApp from '../../containers/LeaderboardApp';
import RecipeAppContainer from '../../containers/RecipeAppContainer';
import WeatherApp from '../../containers/WeatherApp';
import WikiApp from '../../containers/WikiApp';

export default class MyApps extends Component {
	constructor(props) {
		super(props);
		this.state = { page: 1 };
	}
	displayAppSet(page) {
		switch (page) {
			case 1: 
				return (
					<div key={1}>
						<WeatherApp />
						<WikiApp />
					</div>
				);
			case 2: 
				return (
					<div key={2}>
						<LeaderboardApp />
						<RecipeAppContainer />
					</div>
				)
			default: 
				return (
					<div key={3}>
						<h3 className="center">I'll add more apps soon!</h3>
					</div>
				)
		}
	}
	render() {
		return (
			<div className="section">
				<div className="card-container">
						<div className="row center no-margin-top no-margin-bot">
							<div className="col s6 l4 hide-on-med-and-down">
								<a className="btn app-btn" onClick={() => this.setState({page: this.state.page - 1})}><i className="material-icons left">navigate_before</i>Previous</a>
	            </div>
	            <div className="col s12 l4">
	              <h3 className="no-margin-top no-margin-bot"><span>App Showcase</span></h3>
	            </div>
	            <div className="col s6 l4 hide-on-med-and-down">
		            <a className="btn app-btn" onClick={() => this.setState({page: this.state.page + 1})}>Next<i className="material-icons right">navigate_next</i></a>
	            </div>
	          </div>
	          <div className="row hide-on-large-only show-on-medium-and-down center">
		          <div className="col s6">
	          		<a className="btn app-btn" onClick={() => this.setState({page: this.state.page - 1})}><i className="material-icons left">navigate_before</i>Previous</a>
	          	</div>
	          	<div className="col s6">
	          		<a className="btn app-btn" onClick={() => this.setState({page: this.state.page + 1})}>Next<i className="material-icons right">navigate_next</i></a>
	          	</div>
	          </div>
	          <hr/>
						<div className="row">
							<CSSTransitionGroup
								component="div"
			          transitionName="example"
			          transitionEnterTimeout={800}
			          transitionLeaveTimeout={500}>
			          {this.displayAppSet(this.state.page)}
			        </CSSTransitionGroup>
							{/*{this.displayAppSet(this.state.page)}*/}
						</div>
				</div>
			</div>
		)
	}
}