import React, { Component } from 'react';

export default class About extends Component {
	render() {
		const data = this.props.displayData;
		return (
			<div className="section">
				<div className="card-container">
					<div className="card-panel">
						<div className="row no no-margin-bot">
							<div className="col s12 l3 center bio">
								<h3 className="no-margin-top"><span>Bio</span></h3>
								<a href="https://www.linkedin.com/in/terence-mangram/">
		              <span className="fa-stack fa-2x">
		                <i className="fa fa-square-o fa-stack-2x"></i>
		                <i className="fa fa-linkedin fa-stack-1x"></i>
		              </span>
		            </a>
		            <a href="https://github.com/terensu-desu">
		              <span className="fa-stack fa-2x">
		                <i className="fa fa-square-o fa-stack-2x"></i>
		                <i className="fa fa-github fa-stack-1x"></i>
		              </span>
		            </a>
		            <a href="https://codepen.io/terensu-desu/">
		              <span className="fa-stack fa-2x">
		                <i className="fa fa-square-o fa-stack-2x"></i>
		                <i className="fa fa-codepen fa-stack-1x"></i>
		              </span>
		            </a>
		            <a href="https://www.flickr.com/photos/mynomadmind/">
		              <span className="fa-stack fa-2x">
		                <i className="fa fa-square-o fa-stack-2x"></i>
		                <i className="fa fa-flickr fa-stack-1x"></i>
		              </span>
		            </a>
							</div>
							<div className="col s12 l9">
								<p className="article">{data.about}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}