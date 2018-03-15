import React from "react";
import Loading from "../Loading/Loading";
import FadeTransition from "../../hoc/FadeTransition";

const twitch = props => {
	let view = <Loading />;
	if(!props.loading) {
		view = (
			<table className="no-margin-top centered">
				<tbody>
					{props.data.map(channel => {
						let bio = channel.bio;
						if (bio.length > 77) {
							bio = bio.substr(0, 77) + "...";
						}
						return (
							<tr key={channel.display_name}>
								<td>
									<a href={"https://www.twitch.tv/" + channel.name}>
										<img
											src={channel.logo}
											alt="logo"
											className="responsive-img user-logo"
										/>
									</a>
								</td>
								<td>
									<a href={"https://www.twitch.tv/" + channel.name}>
										{channel.display_name}
									</a>
								</td>
								<td>
									<span>Status:</span> {channel.stream["stream_type"] === "Offline"
										? channel.stream.stream_type
										: channel.stream.channel.status}
								</td>
								{channel.stream["stream_type"] === "Offline"
									? <td>{bio}</td>
									: <td><span>Playing: </span>{channel.stream.game}</td>}
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
	return (
		<FadeTransition>
			<div className="col s12 center">
				<div className="card-panel card-round">
					<img
						alt="twitch logo"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Twitch_logo_%28wordmark_only%29.svg/300px-Twitch_logo_%28wordmark_only%29.svg.png"
					/>
					<h5>See what's happening on Twitch.tv!</h5>
					<h5>
						by <span>Terence Mangram</span> for FreeCodeCamp
					</h5>
					{view}
				</div>
			</div>
		</FadeTransition>
	);
};

export default twitch;
