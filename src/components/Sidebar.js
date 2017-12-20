import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
	constructor() {
		super();
		this.handleLanguageClick = this.handleLanguageClick.bind(this);
    this.handleActiveLink = this.handleActiveLink.bind(this);
	}

	// onClick to handle passing the information to the prop to change the state
  // this handler will also hide the toggle which button is visible as well
  handleLanguageClick(e, val) {
      e.preventDefault();
      this.props.changeLanguage(val);
      if(val === "japanese") {
        document.getElementById("english-btn").classList.remove("hidden")
        document.getElementById("japanese-btn").classList.add("hidden")
      }else {
        document.getElementById("japanese-btn").classList.remove("hidden")
        document.getElementById("english-btn").classList.add("hidden")
      }
  }
  handleActiveLink(e) {
    e.preventDefault();
    const userLocation = window.location.hash;
    if(userLocation === "#/") {
      document.getElementById("myBio").classList.add("active");
      document.getElementById("myProjects").classList.remove("active");
      document.getElementById("myApps").classList.remove("active");
    }else if(userLocation === "#/projects") {
      document.getElementById("myProjects").classList.add("active");
      document.getElementById("myBio").classList.remove("active");
      document.getElementById("myApps").classList.remove("active");
    }else if(userLocation === "#/apps") {
      document.getElementById("myApps").classList.add("active");
      document.getElementById("myProjects").classList.remove("active");
      document.getElementById("myBio").classList.remove("active");
    }
  }

  render() {
    return (
      <div>
      	<a data-target="slide-out" className="sidenav-trigger button-collapse btn sidebar-btn"><i className="material-icons cool-arrow">keyboard_arrow_right</i></a>
        <ul id="slide-out" className="sidenav">
        	<li>
        		<div className="user-view center sidebar-profile">
        			<div className="background yellow">
        				<img src="https://i.imgur.com/iVPRd9d.jpg?1" alt="profile-background" />
        			</div>
        			<div className="container-fluid">
        				<div className="row">
        					<div className="col s12">
        						<img src="https://i.imgur.com/HJSqv91.jpg" alt="author" id="authorpic" className="z-depth-4 sidebar-img" />
        					</div>
        				</div>
        			</div>
        			<a className="name">Terence Mangram</a>
        			<a className="email">tmangram@gmail.com</a>
        			<a id="japanese-btn" className="sidenav-close" onClick={(e) => this.handleLanguageClick(e, "japanese")}>Switch to Japanese</a>
              <a id="english-btn" className="sidenav-close hidden" onClick={(e) => this.handleLanguageClick(e, "english")}>Switch to English</a>
        		</div>
        	</li>
        	<li id="myBio" className="nav-li active sidebar-link sidenav-close" onClick={(e) => this.handleActiveLink(e)}>
            <Link to="/">My Bio<i className="material-icons accent right">home</i></Link>
          </li>
        	<li id="myProjects" className="nav-li sidebar-link sidenav-close" onClick={(e) => this.handleActiveLink(e)}>
            <Link to="/projects">My Projects<i className="material-icons accent right">video_library</i></Link>
          </li>
          <li id="myApps" className="nav-li sidebar-link sidenav-close" onClick={(e) => this.handleActiveLink(e)}>
            <Link to="/apps">My Apps<i className="material-icons accent right">apps</i></Link>
          </li>
        	<li className="nav-li"><div className="divider"></div></li>
        	<li><p className="sidebar-header no-margin-bot">Projects</p><hr className="sidebar-hr" /></li>
        	<li className="nav-li"><a href="https://terensu-desu.github.io/nihon-alt/" className="waves-effect sidebar-link sidenav-close">NihonALT</a></li>
          <li className="nav-li"><a href="https://terensu-desu.github.io/vitamin/"  className="waves-effect sidebar-link sidenav-close">Vitamin</a></li>
          <li className="nav-li"><a href="https://github.com/terensu-desu"  className="waves-effect sidebar-link sidenav-close">Github</a></li>
          <li className="nav-li"><a href="https://codepen.io/terensu-desu/"  className="waves-effect sidebar-link sidenav-close">CodePen</a></li>
        </ul>
      </div>
    )
  }
}