import React, { Component } from 'react';

export default class WikiSearch extends Component {
	constructor() {
		super();
		this.handleSearchResults = this.handleSearchResults.bind(this);
	}

	handleSearchResults() {
		const resultsMap = this.props.searchResults.map((item, i) => {
			return (
				<div className="row no-margin-bot" key={i}>
					<div className="col s4">
						<h5 className="no-margin-bot"><span>{item.title}</span></h5>
					</div>
					<div className="col s8">
						<p className="truncate no-margin-bot">{item.extract}</p><a className="right" href={"https://en.wikipedia.org/?curid=" + item.pageid}>See more</a>
					</div>
					<hr/>
				</div>
			)
		});
		return resultsMap;
	}

	render() {
		return (
			<div className="col s12 l6">
				<div className="card-panel z-depth-2">
					<div className="row">
						<div className="col s12 center">
							<h4 className="no-margin-bot accent">Wikipedia Search</h4>
						</div>
					</div>
					<div className="row no-margin-bot">
						<form className="col s12" onSubmit={this.props.getWikiData}>
							<div className="row no-margin-bot">
								<div className="input-field col s8">
									<i className="material-icons prefix">textsms</i>
									<input id="search-field" type="text" />
									<label htmlFor="search-field">Search</label>
								</div>
								<div className="col s4 center">
									<br/>
									<a className="btn app-btn" type="submit" onClick={this.props.getWikiData}>Search</a>
								</div>
							</div>
						</form>
					</div>
					{this.handleSearchResults()}
				</div>
			</div>
		)
	}
}