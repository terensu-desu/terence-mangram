import React, { Component } from 'react';

export default class Home extends Component {
	render() {
		const data = this.props.displayData;
		return (
			<main>
				<div className="container-fluid banner-image">
					<div className="row center">
						<img src="https://i.imgur.com/NPqHt2yb.jpg" alt="author" className="author-showcase circle responsive-img z-depth-2" />
						<h1 className="banner-text no-margin-top">{data.banner.main}</h1>
						<h3 className="banner-text">{data.banner.sub}</h3>
					</div>
				</div>
				<div className="container">
					<div className="card-panel">
						<div className="row">
							<div className="col s12 l2 center">
								<h3><span>Bio</span></h3>
								<a href="https://www.linkedin.com/in/terence-mangram-98141a34/">
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
							<div className="col s12 l10">
								<p className="article">{data.about}</p>
							</div>
						</div>
					</div>
					<div className="footer-copyright card-panel">
						<div className="row no-margin-top no-margin-bot">
							<div className="col s12">
								<p className="no-margin-top no-margin-bot center">Made by <a href="https://github.com/terensu-desu"><span>Terence Mangram</span></a>, build with <a href="https://reactjs.org/"><span>React.js</span></a> and <a  href="http://next.materializecss.com/"><span>MaterializeCSS</span>.</a></p>
							</div>
						</div>
					</div>
				</div>
			</main>
		)
	}
}