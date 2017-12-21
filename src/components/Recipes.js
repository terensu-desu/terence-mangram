import React, { Component } from 'react';

export default class Recipes extends Component {
	render() {
		return (
			<div className="col s12 l6">
					<h4 className="center app-title no-margin-top z-depth-2">Recipe List</h4>
					<ul className="collapsible expand no-margin-top z-depth-2">
				    <li>
				      <div className="collapsible-header"><i className="material-icons">build</i>First</div>
				      <div className="collapsible-body recipe-body">
				      	<p className="no-margin-top">Lorem ipsum dolor sit amet.</p>
				      	<a className="btn app-btn">Edit / Save</a>
				      	<a className="btn app-btn hidden">Delete</a>
				      	<a className="btn app-btn hidden">Cancel</a>
				      </div>
				    </li>
				  </ul>
			</div>
		)
	}
}