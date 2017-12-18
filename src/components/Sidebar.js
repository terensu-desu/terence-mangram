import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	// onClick to handle passing the information to the prop to change the state
  // this handler will also hide the toggle which button is visible as well
  handleClick(e, val) {
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

  render() {
    return (
      <div>
      	<a data-target="slide-out" className="sidenav-trigger button-collapse btn sidebar-btn"><i className="material-icons">keyboard_arrow_right</i></a>
        <ul id="slide-out" className="sidenav" role="nav">
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
        			<a id="japanese-btn" className="sidenav-close" onClick={(e) => this.handleClick(e, "japanese")}>Switch to Japanese</a>
              <a id="english-btn" className="sidenav-close hidden" onClick={(e) => this.handleClick(e, "english")}>Switch to English</a>
        		</div>
        	</li>
        	<li className="nav-li active sidebar-link sidenav-close"><Link to="/">About Myself<i className="material-icons accent right">home</i></Link></li>
        	<li className="nav-li sidebar-link sidenav-close"><Link to="/projects">About My Projects<i className="material-icons accent right">video_library</i></Link></li>
        	<li className="nav-li"><div className="divider"></div></li>
        	<li><p className="sidebar-header">Projects</p></li>
        	<li className="nav-li"><a href="https://terensu-desu.github.io/nihon-alt/" className="waves-effect sidebar-link sidenav-close">NihonALT</a></li>
          <li className="nav-li"><a href="https://terensu-desu.github.io/vitamin/"  className="waves-effect sidebar-link sidenav-close">Vitamin</a></li>
          <li className="nav-li"><a href="https://github.com/terensu-desu"  className="waves-effect sidebar-link sidenav-close">Github</a></li>
          <li className="nav-li"><a href="https://codepen.io/terensu-desu/"  className="waves-effect sidebar-link sidenav-close">CodePen</a></li>
        </ul>
      </div>
    )
  }
}