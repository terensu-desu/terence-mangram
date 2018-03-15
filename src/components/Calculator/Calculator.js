import React from "react";
import FadeTransition from "../../hoc/FadeTransition";
import "./Calculator.css";

const calculator = props => {
	return (
		<FadeTransition>
			<div id="main-container">
				<br/>
				<div id="display-container">
					<input id="display" type="text" disabled value={props.display.join("")} />
				</div>
				<span id="credit">Terence Mangram Instruments</span>
				<div id="message-container">
					<input id="message" type="text" disabled value={props.message} />
					<span id="name">TM-108</span>
				</div>
				<br/>
				<div id="button-container" onClick={props.click}>
					<button id="clear-all" className="calcButton red">AC</button>
					<button id="clear-one" className="calcButton red">CE</button>
					<button id="divide" className="calcButton red" value="/">&divide;</button>
					<button id="times" className="calcButton red" value="*">&times;</button>
					<br/>
					<button id="seven" className="calcButton white" value="7">7</button>
					<button id="eight" className="calcButton white" value="8">8</button>
					<button id="nine" className="calcButton white" value="9">9</button>
					<button id="minus" className="calcButton red" value="-">&minus;</button>
					<br/>
					<button id="four" className="calcButton white" value="4">4</button>
					<button id="five" className="calcButton white" value="5">5</button>
					<button id="six" className="calcButton white" value="6">6</button>
					<button id="plus" className="calcButton red" value="+">+</button>
					<br/>
					<button id="one" className="calcButton white" value="1">1</button>
					<button id="two" className="calcButton white" value="2">2</button>
					<button id="three" className="calcButton white" value="3">3</button>
					<button id="equals" className="calcButton red" value="=">=</button>
					<br/>
					<button id="zero" className="calcButton white" value="0">0</button>
					<button id="decimal" className="calcButton white" value=".">.</button>
					<button id="power" className="calcButton red">ON/OFF</button>
				</div>
				<br/>
				<br/>
			</div>
		</FadeTransition>
	);
};

export default calculator;