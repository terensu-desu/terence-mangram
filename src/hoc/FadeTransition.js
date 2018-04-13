import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import Aux from "./Aux";

const fadeTransition = props => (
	<CSSTransitionGroup
	component={Aux}
  transitionName="fade"
  transitionAppear={true}
  transitionAppearTimeout={1500}
  transitionEnter={false}
  transitionLeave={false}>
	  {props.children}
  </CSSTransitionGroup>
);

export default fadeTransition;