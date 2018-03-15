import React, { Component } from 'react';
import axios from 'axios';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import FadeTransition from "../../hoc/FadeTransition";

class LeaderboardApp extends Component {
	state = {
		loading: true,
		displayRecent: true,
		recent: null,
		allTime: null
	};

	componentDidMount() {
		this.getLeaderboardData();
	}

	getLeaderboardData = () => {
		axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
			.then((response) => {
				this.setState({ recent: response.data });
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
	};

	sortByRecent = () => {
		this.setState({ displayRecent: true });
	};

	sortByAllTime = () => {
		this.setState({ displayRecent: false });
	};

	render() {
		return (
			<FadeTransition>
				<div className="col s12 l6 center">
					<Leaderboard
						recent={this.state.recent}
						allTime={this.state.allTime}
						sortByRecent={this.sortByRecent}
						sortByAllTime={this.sortByAllTime}
						recentSort={this.state.displayRecent}
						loading={this.state.loading}
					/>
				</div>
			</FadeTransition>
		)
	}
}

export default LeaderboardApp;