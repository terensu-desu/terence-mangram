import React, { Component } from "react";
import math from "mathjs";
import Calculator from "../../components/Calculator/Calculator";

class CalculatorApp extends Component {
	state = {
		userInputDisplay: [],
		message: ""
	};

	handleClick = event => {
		const input = event.target;
		const operations = ["divide", "times", "minus", "plus", "decimal"];
		if(input.id === "power") {
			document.getElementById("display").classList.toggle("no-power");
		} else if(input.id === "clear-all") {
			this.setState({ userInputDisplay: [] });
		} else if(input.id === "clear-one") {
			const oldInputDisplay = this.state.userInputDisplay;
			const newInputDisplay = oldInputDisplay.slice(0, oldInputDisplay.length - 1);
			this.setState({ userInputDisplay: newInputDisplay });
		} else if(input.id === "equals") {
			this.handleCalculate();
		} else if(operations.includes(input.id)) {
			this.handleValidate(input.value);
		} else {
			const newInputDisplay = this.state.userInputDisplay.concat(input.value);
			this.setState({	userInputDisplay: newInputDisplay });
		}
	};

	handleCalculate = () => {
		try {
			let newCalcValue = math.eval(this.state.userInputDisplay.join(""));
			if(isNaN(newCalcValue) || newCalcValue === Infinity) {
				throw new Error("error");
			}
			this.setState({ userInputDisplay: [newCalcValue] });
		}
		catch(error) {
			this.setState({
				userInputDisplay: [],
				message: "Error..."
			});
			setTimeout(() => {
				this.setState({ message: "" });
			}, 2000);
		}
	};

	handleValidate = input => {
		const lastElement = this.state.userInputDisplay[this.state.userInputDisplay.length - 1];
		const errorTriggers = ["/", "*", "-", "+"];
		if(input === "." && lastElement !== ".") {
			const newInputDisplay = this.state.userInputDisplay.concat(input);
			this.setState({ userInputDisplay: newInputDisplay });
		} else if(input === "." && lastElement === ".") {
			this.setState({ message: "Can't do that" });
			setTimeout(() => {
				this.setState({ message: "" });
			}, 2000);
		} else if(!errorTriggers.includes(lastElement) && lastElement !== ".") {
			const newInputDisplay = this.state.userInputDisplay.concat(input);
			this.setState({ userInputDisplay: newInputDisplay });
		}
	};

	render() {
		return (
			<Calculator 
			display={this.state.userInputDisplay}
			message={this.state.message}
			click={this.handleClick} 
			/>
		);
	}
};

export default CalculatorApp;