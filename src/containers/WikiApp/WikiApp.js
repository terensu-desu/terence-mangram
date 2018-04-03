import React, { Component } from "react";
import axios from "axios";
import Wiki from "../../components/Wiki/Wiki";
import FadeTransition from "../../hoc/FadeTransition";

class WikiApp extends Component {
	state = { 
		searchResults: null,
		pageId: null,
		loading: false,
		feelingLucky: true,
		luckyData: null
	};

	// get search query and request data from Wiki API and set it to state
	getWikiData = event => {
		event.preventDefault();
		this.setState({ loading: true });
		const baseURL =
			"https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&uselang=user&prop=pageimages%7Cextracts&generator=search&pilimit=max&exsentences=6&exlimit=max&exintro=1&explaintext=1&gsrnamespace=&gsrlimit=5&gsrsearch=";
		const userQuery = event.target.query.value
		axios({
			method: "get",
			url: baseURL + userQuery
		})
			.then(res => {
				const results = res.data.query.pages;
				const resultsArray = Object.keys(results).map(key => results[key]);
				this.setState({
					searchResults: resultsArray,
					pageId: resultsArray[0].pageid,
					loading: false
				});
				this.getPageData(resultsArray[0].pageid);
			})
			.catch(err => {
				console.log(err);
			});
	};

	getPageData = (pageId) => {
		this.setState({ loading: true });
		const pageAPIurl = "https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&uselang=user&utf8=1&pageid=";
		axios.get(pageAPIurl + pageId).then(res => {
				const luckyData = res.data.parse.text["*"];
				this.setState({
					luckyData: luckyData,
					loading: false
				});
			}).catch(err => {
				console.log(err);
			})
	};

	toggleSearch = () => {
		this.setState(prevState => {
			return {
				feelingLucky: !prevState.feelingLucky
			};
		});
		console.log(this.state.feelingLucky);
	};

	render() {
		return (
			<FadeTransition>
				<Wiki
					getWikiData={this.getWikiData}
					searchResults={this.state.searchResults}
					pageId={this.state.pageId}
					loading={this.state.loading}
					feelingLucky={this.state.feelingLucky}
					toggleSearch={this.toggleSearch}
					luckyData={this.state.luckyData}
				/>
			</FadeTransition>
		);
	}
}

export default WikiApp;
