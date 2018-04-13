import React from "react";
import "./Header.css";

const header = props => {
	return (
			<div id="header">
				<div className="profile">
					<a href="https://www.linkedin.com/in/terence-mangram/">
						<img
							className="author-img"
							src="https://i.imgur.com/NPqHt2yb.jpg"
							alt="Terence, himself"/>
					</a>
					<h1>
						<strong>I'm Terence Mangram,</strong>
						<br/>
						a world-traveled, self-taught web developer
						<br/>
						eager to start my career in Chicago.
					</h1>
				</div>
				<div className="navlinks">
					<div className="divider"></div>
					<ul className="navlist">
						<li><a href="#about">About</a></li>
						<li><a href="#projects">Portfolio</a></li>
						<li><a href="#appshowcase">App Showcase</a></li>
						<li><a href="#skills">Skills</a></li>
						<li><a href="#resume">Resume</a></li>
					</ul>
					<div className="divider"></div>
				</div>
				<div className="footer">
					<h4>Contact me:</h4>
					<a href="mailto:tmangram@gmail.com">
            <span className="fa-stack fa-2x">
              <i className="fa fa-square-o fa-stack-2x"></i>
              <i className="fa fa-envelope-o fa-stack-1x"></i>
            </span>
          </a>
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
          <a href="https://twitter.com/TMangram">
            <span className="fa-stack fa-2x">
              <i className="fa fa-square-o fa-stack-2x"></i>
              <i className="fa fa-twitter fa-stack-1x"></i>
            </span>
          </a>
          <a href="https://www.flickr.com/photos/mynomadmind/">
            <span className="fa-stack fa-2x">
              <i className="fa fa-square-o fa-stack-2x"></i>
              <i className="fa fa-flickr fa-stack-1x"></i>
            </span>
          </a>
				</div>
			</div>
	);
};

export default header;