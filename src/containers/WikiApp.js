import React, { Component } from 'react';
import axios from 'axios';
import WikiSearch from '../components/WikiSearch';

export default class WikiApp extends Component {
	constructor() {
		super();
		this.state = { searched: false, searchResults: [] }
		this.getWikiData = this.getWikiData.bind(this);
		this.handleSearchData = this.handleSearchData.bind(this);
	}

	// get search query and request data from Wiki API and set it to state
	getWikiData() {
		const baseURL = "https://en.wikipedia.org//w/api.php?action=query&format=json&origin=*&uselang=user&prop=pageimages%7Cextracts&generator=search&pilimit=max&exsentences=6&exlimit=max&exintro=1&explaintext=1&gsrnamespace=&gsrlimit=3&gsrsearch=";
		const userQuery = document.getElementById("search-field").value;
		axios({
			method:'get',
			url: baseURL + userQuery,
		})
			.then((response) => {
				this.setState({ searched: true });
				this.handleSearchData(response);
		}).catch((error) => {
				console.log(error)
		});
	}

	// take response from API and map it to the template to display
	handleSearchData(response) {
		const results = response.data.query.pages;
		const resultsArr = Object.keys(results).map((k)=> {return results[k]});
		this.setState({
			searchResults: resultsArr
		})
	}

	render() {
		return <WikiSearch getWikiData={this.getWikiData} searchResults={this.state.searchResults} searched={this.state.searched} />
	}
}