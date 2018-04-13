import React, { Component } from "react";
import M from "materialize-css";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import AppShowcase from "./containers/AppShowcase/AppShowcase";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

class App extends Component {
	state = { language: "english" };

	componentDidMount() {
		M.Tooltip.init(this.tooltipped, {position: "left"});
	}

	changeLanguage = (newLanguage) => {
		if(this.state.language === "english") {
			this.setState({ language: "japanese" });
		} else {
			this.setState({ language: "english" });
		}
	};

	render() {
		let tooltip = "To Japanese";
		if(this.state.language === "japanese") {
			tooltip = "To English"
		}
		return (
			<div className="container-fluid">
				<Header />
				<div id="main">
					<About language={this.state.language} />
					<Projects language={this.state.language} />
					<AppShowcase />
					<Footer />
				</div>
				<div className="fixed-action-btn">
					<button
						ref={tooltipped => {
							this.tooltipped = tooltipped;
						}}
						onClick={this.changeLanguage}
						className="btn-floating btn-large app-btn tooltipped"
						data-delay="50"
						data-tooltip={tooltip}
					>
						<i className="large material-icons">language</i>
					</button>
				</div>
			</div>
		);
	}
}

export default App;
