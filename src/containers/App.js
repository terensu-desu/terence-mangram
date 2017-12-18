import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Home from '../components/Home';
import Projects from '../components/Projects';
import store from '../Store';

export default class App extends Component {
	constructor() {
		super();
		this.state = { language: "english" };
		this.changeLanguage = this.changeLanguage.bind(this);
		this.handleDisplayData = this.handleDisplayData.bind(this);
	}

	// will change the language
	changeLanguage(newLanguage) {
		this.setState({ language: newLanguage });
	}

	// will return display data based on the current state language
	// the returned data will become a prop for the component which called it
	handleDisplayData() {
		const language =  this.state.language;
		return store.returnDisplayData(language);
	}

	// navigation and two routes, each passed display data based on current state language
  render() {
    return (
    	<Router>
	      <div>   
		      <Sidebar changeLanguage={this.changeLanguage} />
	        <Route exact path="/" render={() => <Home displayData={this.handleDisplayData()} />} />
	        <Route path="/projects" render={() => <Projects displayData={this.handleDisplayData()} />} />
	      </div>
	    </Router>
    );
  }
}