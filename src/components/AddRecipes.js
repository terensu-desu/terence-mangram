import React, { Component } from 'react';

export default class AddRecipes extends Component {
	constructor() {
		super();
		this.handleSubmitRecipe = this.handleSubmitRecipe.bind(this);
	}


	handleSubmitRecipe(e) {
		e.preventDefault();
		// Get values from form
		let refs = this.refs;
		let name = refs.name.value;
		let list = refs.list.value.split(",");
		let text = refs.text.value;
		// Trigger action in redux
		this.props.addRecipe(name, list, text);
		// Reset form so the inputs are empty again
		refs.addRecipeForm.reset();
	}

	render() {
		return (
			<div className="card-panel z-depth-2">
		  	<h5 className="center accent">Add a recipe</h5>
		  	<div className="row no-margin-bot">
		  		<form ref="addRecipeForm" onSubmit={this.handleSubmitRecipe}>
		  			<div className="input-field">
		  				<label htmlFor="name">Recipe Name</label>
		  				<input id="name" type="text" ref="name" />
		  			</div>
		  			<div className="input-field">
		  				<label htmlFor="list">Ingredients</label>
		  				<input id="list" type="text" ref="list" />
		  			</div>
		  			<div className="input-field">
		  				<label htmlFor="text">Instructions</label>
		  				<input id="text" type="text" ref="text" />
		  			</div>
		  			<button type="submit" className="btn app-btn">Add<i className="material-icons right">send</i></button>		
		  		</form>
		  	</div>
		  	<div className="row center no-margin-bot">
		  		<p>Your added recipes will stay, even if you leave! Try it out!</p>
		  	</div>
		  </div>
		)
	}
}