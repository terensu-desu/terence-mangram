import React, { Component } from "react";
import M from "materialize-css";

class Skills extends Component {
	componentDidMount() {
		M.ScrollSpy.init(this.skills, {scrollOffset: 50});
	}
	render() {
		return (
			<div
			id="skills"
			className="section scrollspy"
			ref={skills => {this.skills = skills}}>
				<div className="card-container">
					<div className="row no-margin-top no-margin-bot">
		        <div className="col s12">
		          <h3 className="center no-margin-top no-margin-bot">
		            <span>Skills</span>
		          </h3>
		        </div>
		      </div>
		      <hr/>
		      <div className="card-panel center">
		      	<div className="row">
		      		<h4>Front-End</h4>
		      		<ul className="icon-list">
		      			<li><i className="devicon-javascript-plain colored"></i></li>
			      		<li><i className="devicon-react-original-wordmark colored"></i></li>
			      		<li><i className="devicon-jquery-plain-wordmark colored"></i></li>
			      		<li><i className="devicon-bootstrap-plain-wordmark colored"></i></li>
		      		</ul>
		      	</div>
		      	<div className="row">
		      		<h4>Back-End</h4>
		      		<ul className="icon-list">
		      			<li><i className="devicon-nodejs-plain-wordmark colored"></i></li>
			      		<li><i className="devicon-express-original-wordmark colored"></i></li>
			      		<li><i className="devicon-mongodb-plain-wordmark colored"></i></li>
		      		</ul>
		      	</div>
		      	<div className="row">
		      		<h4>Tools</h4>
		      		<ul className="icon-list">
			      		<li><i className="devicon-git-plain-wordmark colored"></i></li>
			      		<li><i className="devicon-github-plain-wordmark colored"></i></li>
			      		<li><i className="devicon-heroku-original-wordmark colored"></i></li>
		      		</ul>
		      	</div>
		      </div>
				</div>
			</div>
		);
	}
}

export default Skills;