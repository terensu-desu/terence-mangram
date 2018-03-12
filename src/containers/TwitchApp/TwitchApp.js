import React, { Component } from "react";
import axios from "axios";

import Twitch from "../../components/Twitch/Twitch";

class TwitchApp extends Component {
	state = {
		loading: true,
		names: ["esl_csgo", "freecodecamp", "sgthegg"],
		data: [
			{lookup_name: "esl_csgo"},
			{lookup_name: "freecodecamp"},
			{lookup_name: "sgthegg"}
		]
	};
	componentDidMount() {
		this.requestAllData();
	}
	requestAllData = () => {
		const streamsUrl = "https://wind-bow.glitch.me/twitch-api/streams/";
		const usersUrl = "https://wind-bow.glitch.me/twitch-api/users/";
		for(let channel of this.state.data) {
			axios.get(streamsUrl + channel.lookup_name)
				.then(streamData => {
					const channel = streamData.data._links.channel.substr(
						streamData.data._links.channel.lastIndexOf("/") + 1
					);
					let streamDataObj = this.state.data.find(channelObj =>
						channelObj.lookup_name === channel
					);
					if(!streamData.data.stream) {
						streamDataObj.stream = {
							stream_type: "Offline"
						};
					} else {
						streamDataObj.stream = streamData.data.stream;
					}
					this.setState({
						data: this.state.data.map(channelObj => {
							if(channelObj.lookup_name === channel) {
								return {...channelObj, ...streamDataObj};
							} else {
								return channelObj;
							}
						})
					});
				}).catch(error => console.log("Error at streamData request:", error));
			axios.get(usersUrl + channel.lookup_name)
				.then(userData => {
					this.setState({
						data: this.state.data.map(channelObj => {
							if(channelObj.lookup_name === userData.data.name) {
								return {...channelObj, ...userData.data};
							} else {
								return channelObj;
							}
						})
					});
				})
			.catch(error => console.log("Error at userData request:", error));
		}
		setTimeout(() => {
			this.setState({ loading: false });
		}, 1500);
	};

	render() {
		return <Twitch data={this.state.data} loading={this.state.loading}/>;
	}
}

export default TwitchApp;