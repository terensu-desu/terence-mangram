import React, { Component } from 'react';
// Current issue: State completely clears on the first change event. Explore how redux handles this kind of scenario to find a fix
export default class EditRecipes extends Component {
	constructor() {
		super();
		this.handleEditChange = this.handleEditChange.bind(this);
		this.handleEditSubmit = this.handleEditSubmit.bind(this);
	}

	// Should be able to update the state on change -- currently only deletes all of state
	handleEditChange(e) {
		e.preventDefault();
		if(e.target.id === "name"){
			this.props.editRecipe(this.props.index, "name", e.target.value);
		} else if(e.target.id === "list") {
			this.props.editRecipe(this.props.index, "list", e.target.value.split(','));
		} else if(e.target.id === "text") {
			this.props.editRecipe(this.props.index, "text", e.target.value);
		}
	}

	handleEditSubmit(e) {
		e.preventDefault();
		// Get values from form
		let refs = this.refs;
    let name = refs.name.value;
		let list = refs.list.value.split(',');
		let text = refs.text.value;
    // Trigger action in redux
  	this.props.saveEdit(this.props.index, name, list, text);
	}

	render() {
		return (
			<div>
				<a href={"#modal" + this.props.index} className="btn app-btn modal-trigger">Edit<i className="material-icons right">border_color</i></a>
				<div id={"modal" + this.props.index} className="modal">
					<div className="modal-content">
						<form ref="recipeEdit" onSubmit={this.handleEditSubmit}>
							<div className="input-field">
								<label className="validate" htmlFor="name">Name</label>
								<input id="name" type="text" ref="name" value={this.props.name} onChange={this.handleEditChange} />
							</div>
							<div className="input-field">
								<label className="validate" htmlFor="list">Ingredients</label>
								<input id="list" type="text" ref="list" value={this.props.list.join(", ")} onChange={this.handleEditChange} />
							</div>
							<div className="input-field">
								<label className="validate" htmlFor="text">Instructions</label>
								<input id="text" type="text" ref="text" value={this.props.text} onChange={this.handleEditChange} />		
							</div>
							<button type="submit" className="btn waves-effect waves-light app-btn">
								<i className="material-icons">send</i> Submit
							</button>					
						</form>
					</div>
				</div>
			</div>
		)
	}
}