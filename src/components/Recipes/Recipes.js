import React, { Component } from "react";
import M from "materialize-css";
import AddRecipes from "./AddRecipes/AddRecipes";

class Recipes extends Component {
	componentDidMount() {
  	M.Collapsible.init(this.collapsible);
	}
	render() {
		const resetStorage = () => {
			localStorage.clear();
			window.location.reload();
		};
		const recipesMap = this.props.recipes.map(recipe => (
			<li key={recipe.id}>
				<div className="collapsible-header"><i className="material-icons">restaurant</i>{recipe.name}</div>
	      <div className="collapsible-body recipe-body">
		      <ul>
		      		{recipe.ingredients.map((ingredient, j) => <li key={j}>{ingredient}</li>)}
	      	</ul>
	      	<hr />
	      	<p className="no-margin-top article">{recipe.text}</p>
	      	<button 
	      		onClick={() => this.props.removeRecipe(recipe.id)} 
	      		className="btn app-btn right">
	      			Delete<i className="material-icons right">delete</i>
	      	</button>
	      	<br/>
	      </div>
			</li>
		));
		return (
			<div className="col s12 l6">
				<h4 className="center app-title no-margin-top z-depth-2">Recipe List Redux</h4>
				<ul 
					ref={collapsible => {this.collapsible = collapsible}}
					className="collapsible expand no-margin-top z-depth-2">
					{recipesMap}
					<AddRecipes addNewRecipe={this.props.addNewRecipe} />
			  </ul>
			  <div className="row center no-margin-bot">
					<p>Your added recipes and changes will stay, even if you leave the page. Try it out!</p>
					<button className="btn app-btn" onClick={() => resetStorage()}>Click here to reset the demo</button>
				</div>
			</div>
		);
	}
};

export default Recipes;