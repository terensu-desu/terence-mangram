import React, { Component } from 'react';

export default class Recipes extends Component {
	constructor() {
		super();
		this.handleAppRecipes = this.handleAppRecipes.bind(this);
		this.handleSubmitRecipe = this.handleSubmitRecipe.bind(this);
	}

	handleAppRecipes() {
		// Use map function to build the section using a template and the data from objects in the array
		// Also note the second map function called to build the list of ingredients (property value is array)
		const recipesMap = this.props.recipes.map((item, index) => {
			return  (
				<li key={index}>
		      <div className="collapsible-header"><i className="material-icons">build</i>{item.name}</div>
		      <div className="collapsible-body recipe-body">
		      	<ul>
		      		{item.list.map((listItem, j) => {
		      			return <li key={j}>{listItem}</li>
		      		})}
		      	</ul>
		      	<hr />
		      	<p className="no-margin-top">{item.text}</p>
		      	<a className="btn app-btn">Edit</a>
		      	<a className="btn app-btn hidden">Save</a>
		      	<a className="btn app-btn hidden">Cancel</a>
		      	<a onClick={() => this.props.removeRecipe(index)} className="btn app-btn right">Delete</a>
		      </div>
		    </li>
			)
		})
		// return the completed section to the location this function was called
		return recipesMap;
	}

	handleSubmitRecipe(e) {
		console.log("Hello")
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
		console.log(this.props)
		return (
			<div className="col s12 l6">
					<h4 className="center app-title no-margin-top z-depth-2">Recipe List Redux</h4>
					<ul className="collapsible expand no-margin-top z-depth-2">
				    {this.handleAppRecipes()}
				  </ul>
				  <div className="card-panel">
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
				  			<button type="submit" className="btn app-btn">Add</button>		
				  		</form>
				  	</div>
				  </div>
			</div>
		)
	}
}