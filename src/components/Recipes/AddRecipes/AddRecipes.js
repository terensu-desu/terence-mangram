import React, { Component } from 'react';

class AddRecipes extends Component {
	handleSubmitRecipe(event) {
		event.preventDefault();
		// Get values from form
		const newRecipe = {
			name: event.target.name.value,
			ingredients: event.target.ingredients.value.split(","),
			text: event.target.text.value
		};
		// Trigger action in redux
		this.props.addNewRecipe(newRecipe);
		// Reset form so the inputs are empty again
		document.getElementById("recipeForm").reset();
	}

	render() {
		return (
		  			<li>
		  				<div className="collapsible-header"><i className="material-icons">touch_app</i>Add a Recipe</div>
		  				<div className="collapsible-body">
		  					<form id="recipeForm" onSubmit={(event) => this.handleSubmitRecipe(event)}>
					  			<div className="input-field">
					  				<label htmlFor="name">Recipe Name</label>
					  				<input id="name" type="text" />
					  			</div>
					  			<div className="input-field">
					  				<label htmlFor="ingredients">Ingredients (separate with commas)</label>
					  				<input id="ingredients" type="text" />
					  			</div>
					  			<div className="input-field">
					  				<label htmlFor="text">Instructions</label>
					  				<input id="text" type="text" />
					  			</div>
					  			<button type="submit" className="btn app-btn">Add<i className="material-icons right">send</i></button>		
					  		</form>
		  				</div>
		  			</li>
		)
	}
}

export default AddRecipes;