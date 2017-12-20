import React, { Component } from 'react';
import WeatherApp from '../containers/WeatherApp';
import WikiApp from '../containers/WikiApp';

export default class MyApps extends Component {
	render() {
    const data = this.props.displayData;
		return (
			<main>
				<div className="container-fluid banner-image2">
          <div className="row">
            <div className="col s12 l2 offset-l2 center">
              <img src="https://i.imgur.com/NPqHt2yb.jpg" alt="author" className="author-showcase circle responsive-img z-depth-2" />
            </div>
            <div className="center col s12 l6">
              <h1 className="banner-text no-margin-bot">{data.banner.main}</h1>
              <h3 className="banner-text no-margin-top">{data.banner.sub}</h3>
            </div>
          </div>
        </div>
				<div className="container">
					<div className="card-panel">
						<div className="row center no-margin-top no-margin-bot">
	            <div className="col s12">
	              <h2 className="no-margin-top no-margin-bot"><span>Apps</span></h2>
	              <hr className="small-hr"/>
	            </div>
	          </div>
						<div className="row">
							<div className="col s12 l6">
								<WeatherApp />
							</div>
							<div className="col s12 l6">
								<WikiApp />
							</div>
						</div>
						<div className="row">
							<div className="col s12 center">
								<div className="card-panel">
									<h4 className="no-margin-bot">FreeCodeCamp Leaderboard</h4>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</main>
		)
	}
}