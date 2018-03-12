import React from 'react';
import Loading from "../Loading/Loading";

const leaderboard = props => {
	let view = <Loading />;
	if(props.recent && props.allTime) {
		let sortFilter = props.recent;
		if(!props.recentSort) {
			sortFilter = props.allTime;
		}
		const viewData = sortFilter.slice(0,5).map((camper, i) => (
			<tr key={camper.username}>
				<td className="center">{i+1}</td>
				<td>{camper.username}<img className="left user-img" alt="user" src={camper.img} /></td>
				<td className="center">{camper.recent}</td>
				<td className="center">{camper.alltime}</td>
			</tr>
		));
		view = (
			<table className="bordered">
				<tbody>
					<tr>
						<td className="center">#</td>
						<td>Name</td>
						<td className="center">
							<a className={props.recentSort ? "active sort-btn" : "  sort-btn"} onClick={props.sortByRecent}>
								Points in the last 30 days<i className="material-icons md-30">sort</i>
							</a>
						</td>
						<td className="center">
							<a className={props.recentSort ? " sort-btn" : "active sort-btn"} onClick={props.sortByAllTime}>
								All time points<i className="material-icons md-30">sort</i>
							</a>
						</td>
					</tr>
					{viewData}
					<tr>
						<td colSpan="4" className="center">Data provided by <a href="https://www.freecodecamp.org">FreeCodeCamp</a></td>
					</tr>
				</tbody>
			</table>
		);
	}
	return (
		<div className="table-div z-depth-2">
			<h4 className="app-title no-margin-top">FCC Camper Leaderboard - Top 5</h4>
			{view}
		</div>
	);
};

export default leaderboard;