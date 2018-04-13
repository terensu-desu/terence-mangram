import React, { Component } from "react";
import M from "materialize-css";

import JavaScript from "../../assets/images/skills/javascript.svg";
import ReactSvg from "../../assets/images/skills/react.svg";
import ReduxSvg from "../../assets/images/skills/redux.svg";
import jQuery from "../../assets/images/skills/jquery.svg";
import Materialize from "../../assets/images/skills/materializecss.svg";
import Bootstrap from "../../assets/images/skills/bootstrap.svg";
import NodeJs from "../../assets/images/skills/nodejs.svg";
import Express from "../../assets/images/skills/express.svg";
import MongoDB from "../../assets/images/skills/mongodb.svg";
import npm from "../../assets/images/skills/npm.svg";
import Git from "../../assets/images/skills/git-icon.svg";
import Github from "../../assets/images/skills/github-icon.svg";
import Heroku from "../../assets/images/skills/heroku.svg";

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
		      			<li><img src={JavaScript} alt="javascript"/></li>
			      		<li><img src={ReactSvg} alt="react"/></li>
			      		<li><img src={ReduxSvg} alt="redux"/></li>
			      		<li><img src={jQuery} alt="jquery"/></li>
			      		<li><img src={Materialize} alt="materialize"/></li>
			      		<li><img src={Bootstrap} alt="bootstrap"/></li>
		      		</ul>
		      	</div>
		      	<div className="row">
		      		<h4>Back-End</h4>
		      		<ul className="icon-list">
		      			<li><img src={NodeJs} alt="nodejs"/></li>
			      		<li><img src={Express} alt="express"/></li>
			      		<li><img src={MongoDB} alt="mongodb"/></li>
		      		</ul>
		      	</div>
		      	<div className="row">
		      		<h4>Tools</h4>
		      		<ul className="icon-list">
		      			<li><img src={npm} alt="npm"/></li>
			      		<li><img src={Git} alt="git"/></li>
			      		<li><img src={Github} alt="github"/></li>
			      		<li><img src={Heroku} alt="heroku"/></li>
		      		</ul>
		      	</div>
		      </div>
				</div>
			</div>
		);
	}
}

export default Skills;