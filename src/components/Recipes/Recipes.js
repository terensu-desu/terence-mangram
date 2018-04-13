import React, { Component } from "react";
import M from "materialize-css";
import AddRecipes from "./AddRecipes/AddRecipes";
import FadeTransition from "../../hoc/FadeTransition";

class Recipes extends Component {
	componentDidMount() {
  	M.Collapsible.init(this.collapsible);
	}
	handleEditClick = id => {
		document.getElementById(id).classList.toggle("hidden");
		document.getElementById(id+1).classList.toggle("hidden");
	};
	handleSaveClick(event, id, editedRecipe) {
		event.preventDefault();
		document.getElementById(id).classList.toggle("hidden");
		document.getElementById(id-1).classList.toggle("hidden");
		const editedStorage = JSON.parse(localStorage.getItem("recipes"));
		const editedIndex = editedStorage.findIndex(recipe => recipe.id === editedRecipe.id);
		editedStorage[editedIndex] = editedRecipe;
		localStorage.setItem("recipes", JSON.stringify(editedStorage));
	};
	handleChange(event, id) {
		event.preventDefault();
		let updatedInfo = {};
		if(event.target.name === "edit-name") {
			updatedInfo = {
				name: event.target.value
			};
		} else if(event.target.name === "ingredients") {
			updatedInfo = {
				ingredients: event.target.value.split(", ")
			};
		} else {
			updatedInfo = {
				text: event.target.value
			};
		}
		this.props.editRecipe(id, updatedInfo);
	};
	render() {
		const resetStorage = () => {
			localStorage.clear();
			window.location.reload();
		};
		const recipesMap = this.props.recipes.map(recipe => (
			<li key={recipe.id}>
				<div className="collapsible-header"><i className="material-icons">restaurant</i>{recipe.name}</div>
	      <div id={recipe.id} className="collapsible-body recipe-body">
		      <ul>
	      		{recipe.ingredients.map((ingredient, j) => <li key={ingredient+j}>{ingredient}</li>)}
	      	</ul>
	      	<hr />
	      	<p className="no-margin-top article">{recipe.text}</p>
	      	<button 
      		onClick={()=> this.handleEditClick(recipe.id)}
      		className="btn app-btn left modal-trigger">
      			Edit<i className="material-icons right">edit</i>
	      	</button>
	      	<button 
      		onClick={() => this.props.removeRecipe(recipe.id)} 
      		className="btn app-btn right">
      			Delete<i className="material-icons right">delete</i>
	      	</button>
	      	<br/>
	      </div>
	      <div id={recipe.id+1} className="collapsible-body recipe-body hidden">
	      	<h5 className="center">Edit Mode</h5>
	      	<hr />
	      	<form onSubmit={(event)=> this.handleSaveClick(event, recipe.id+1, recipe)}>
	      		<div className="row">
	      			<div className="input-field col s12">
	      				<label htmlFor="edit-name">Recipe Name</label>
		      			<input 
		      			id="edit-name"
		      			type="text" 
		      			name="edit-name" 
		      			value={recipe.name}
		      			onChange={(event) => this.handleChange(event, recipe.id)} />
	      			</div>
	      		</div>
			      <div className="row">
			      	<div className="input-field col s12">
			      		<textarea
			      		name="ingredients" 
			      		id="ingredients" 
			      		value={recipe.ingredients.join(", ")}
			      		onChange={(event) => this.handleChange(event, recipe.id)}
			      		className="materialize-textarea">
			      		</textarea>
			      		<label htmlFor="ingredients">Ingredients. Separate items with a comma.</label>
			      	</div>
		      	</div>
		      	<div className="row">
			      	<div className="input-field col s12">
				      	<textarea 
				      	name="text" 
				      	id="recipe-text"
				      	value={recipe.text}
				      	onChange={(event) => this.handleChange(event, recipe.id)}
				      	className="materialize-textarea">
				      	</textarea>
				      	<label htmlFor="recipe-text">Instructions</label>
			      	</div>
		      	</div>
		      	<div className="row">
			      	<button
			      	type="submit"
		      		className="btn app-btn left">
		      			Save<i className="material-icons right">save</i>
			      	</button>
			      </div>
			    </form>
	      </div>
			</li>
		));
		return (
			<FadeTransition>
				<div className="col s12">
					<h4 className="center app-title no-margin-top z-depth-2">Recipe List Redux</h4>
					<ul 
					ref={collapsible => {this.collapsible = collapsible}}
					className="collapsible expand no-margin-top z-depth-2">
						{recipesMap}
						<AddRecipes addNewRecipe={this.props.addNewRecipe} />
				  </ul>
				  <div className="row center no-margin-bot">
						<p>Your added recipes and changes will persist, even if you leave the page. Try it out!</p>
						<button className="btn app-btn" onClick={() => resetStorage()}>
						Click here to reset the demo
						</button>
					</div>
				</div>
			</FadeTransition>
		);
	}
};

export default Recipes;