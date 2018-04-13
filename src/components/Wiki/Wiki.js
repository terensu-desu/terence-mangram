import React from 'react';
import Loading from "../Loading/Loading";

const wiki = (props) => {
	let results = (
		<div className="row center">
			<div className="col s12">
				<h5 id="blank-search">Search to see the top five results from Wikipedia.</h5>
			</div>
		</div>
	);
	if(props.loading) {
		results = <Loading />
	}
	if(props.searchResults && !props.feelingLucky) {
		results = props.searchResults.map((item, i) => (
			<div className="row no-margin-bot" key={i}>
				<div className="col s4">
					<h5 className="no-margin-bot"><span>{item.title}</span></h5>
				</div>
				<div className="col s8">
					<p className="truncate no-margin-bot">{item.extract}</p>
					<a className="right accent" href={"https://en.wikipedia.org/?curid=" + item.pageid}>See more</a>
				</div>
				<hr/>
			</div>
		));
	}
	if(props.luckyData && props.feelingLucky) {
		results = (
			<div dangerouslySetInnerHTML={ {__html: props.luckyData} }>
			</div>
		);
	}
	return (
		<div className="col s12">
			<div className="card-panel z-depth-2 wiki-space">
				<div className="row">
					<div className="col s12 center">
						<h4 className="no-margin-top no-margin-bot accent">Wikipedia Search</h4>
					</div>
				</div>
				<div className="row no-margin-bot">
					<form className="col s12" onSubmit={(event) => props.getWikiData(event)}>
						<div className="row no-margin-bot">
							<div className="switch center accent" onChange={props.toggleSearch}>
						    <label>
						      Feeling Lucky
						      <input type="checkbox"/>
						      <span className="lever"></span>
						      See Results
						    </label>
						  </div>
							<div className="input-field col s12 m10">
								<i className="material-icons prefix">search</i>
								<input name="query" type="text" />
								<label htmlFor="search-field">Search</label>
							</div>
							<div className="col m2 center hide-on-small-only">
								<br/>
								<button className="btn app-btn" type="submit">Search</button>
							</div>
						</div>
						<div className="row center show-on-small hide-on-med-and-up">
							<button className="btn app-btn" type="submit">Search</button>
						</div>
					</form>
				</div>
				{results}
			</div>
		</div>
	);
}

export default wiki;