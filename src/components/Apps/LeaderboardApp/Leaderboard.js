import React, { Component } from 'react';

export default class Leaderboard extends Component {
	constructor() {
		super();
		this.handleSortClick = this.handleSortClick.bind(this);
		this.displayData = this.displayData.bind(this);
	}

	// Based on what link was clicked, the function prop will be called to change the parent state.
	handleSortClick(e, val) {
		e.preventDefault();
		if(val === "recent") {
			this.props.sort(true);
		} else if(val === "allTime") {
			this.props.sort(false);
		}
	}

	// Determine which sorting view the state is in, then call the function to map the data.
	displayData() {
		if(this.props.view) {
			return this.mapData(this.props.recent);
		}
		return this.mapData(this.props.allTime);
	}

	// Based on the sorting view determined by displayData(), mapData will map out the data from that prop
	mapData(filter) {
		return filter.slice(0,5).map((info, i) => {
			return (
				<tr key={i}>
					<td className="center">{i+1}</td>
					<td>{info.username}<img className="left user-img" alt="user" src={info.img} /></td>
					<td className="center">{info.recent}</td>
					<td className="center">{info.alltime}</td>
				</tr>
			)
		})
	}

	render() {
		return (
			<div className="table-div z-depth-2">
				<h4 className="app-title no-margin-top">FCC Camper Leaderboard - Top 5</h4>
				<table className="bordered">
					<tbody>
						<tr>
							<td className="center">#</td>
							<td>Name</td>
							<td className="center">
								<a className={this.props.view ? "active sort-btn" : "  sort-btn"} onClick={(e) => this.handleSortClick(e, "recent")}>
									Points in the last 30 days<i className="material-icons md-30">sort</i>
								</a>
							</td>
							<td className="center">
								<a className={this.props.view ? " sort-btn" : "active sort-btn"} onClick={(e) => this.handleSortClick(e, "allTime")}>
									All time points<i className="material-icons md-30">sort</i>
								</a>
							</td>
						</tr>
						{this.displayData()}
					</tbody>
				</table>
				<p>Data provided by <a href="https://www.freecodecamp.org">FreeCodeCamp</a></p>
			</div>
		)
	}
}