import React, { Component } from "react";
import axios from "axios";
import Wiki from "../../components/Wiki/Wiki";

class WikiApp extends Component {
	state = { searchResults: null, loading: false };

	// get search query and request data from Wiki API and set it to state
	getWikiData = event => {
		event.preventDefault();
		this.setState({ loading: true });
		const baseURL =
			"https://en.wikipedia.org//w/api.php?action=query&format=json&origin=*&uselang=user&prop=pageimages%7Cextracts&generator=search&pilimit=max&exsentences=6&exlimit=max&exintro=1&explaintext=1&gsrnamespace=&gsrlimit=5&gsrsearch=";
		const userQuery = event.target.query.value
		axios({
			method: "get",
			url: baseURL + userQuery
		})
			.then(response => {
				const results = response.data.query.pages;
				const resultsArray = Object.keys(results).map(key => results[key]);
				this.setState({ searchResults: resultsArray, loading: false });
			})
			.catch(error => {
				console.log(error);
			});
	};
	render() {
		return (
			<Wiki
				getWikiData={this.getWikiData}
				searchResults={this.state.searchResults}
				loading={this.state.loading}
			/>
		);
	}
}

export default WikiApp;
