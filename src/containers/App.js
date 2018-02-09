import React, { Component } from "react";

import Header from "../components/Header";
//import Sidebar from "../components/Sidebar";
import About from "../components/About";
import MyApps from "../components/Apps/MyApps";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import store from "../Store";

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
		const language = this.state.language;
		return store.returnDisplayData(language);
	}

	// navigation and two routes, each passed display data based on current state language
	render() {
		return (
			<div>
				<Header />
				<div className="container">
					{/*<Sidebar changeLanguage={this.changeLanguage} />*/}
					<About displayData={this.handleDisplayData()} />
					<MyApps displayData={this.handleDisplayData()} />
					<Projects displayData={this.handleDisplayData()} />
					<Footer />
				</div>
			</div>
		);
	}
}


/*

<Router basename={process.env.PUBLIC_URL}>
</Router>

*/