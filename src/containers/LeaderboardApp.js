import React, { Component } from 'react';
import axios from 'axios';
import Leaderboard from '../components/Leaderboard';
import Loading from '../components/Loading';

export default class LeaderboardApp extends Component {
	constructor() {
		super();
		this.state = {
			loading: true,
			displayView: true,
			recent: [],
			allTime: []
		}
		this.sortView = this.sortView.bind(this);
	}

	componentDidMount() {
		this.getLeaderboardData();
	}

	getLeaderboardData() {
		axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
			.then((response) => {
				this.setState({
					recent: response.data
				});
			})
			.catch((err) => {
				console.log("Error in recent points retrieval", err)
			});
		axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
			.then((response) => {
				this.setState({
					allTime: response.data,
					loading: false
				});
			})
			.catch((err) => {
				console.log("Error in recent points retrieval", err)
			});
	}

	sortView(val) {
		this.setState({
			displayView: val
		});
	}

	render() {
		return (
			<div className="col s12 l6 center">
			{
				this.state.loading 
				? <Loading />
				: <Leaderboard recent={this.state.recent} allTime={this.state.allTime} sort={this.sortView} view={this.state.displayView} />
			}
			</div>
		)
	}
}