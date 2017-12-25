import React, { Component } from 'react';
import { Provider } from "react-redux";
import RecipeApp from './RecipeApp';
import reduxStore from '../reduxStore';

export default class RecipeAppContainer extends Component {
	addRecipe(recipeTitle, recipeDetails) {
		if(typeof(Storage) !== "undefined") {
			localStorage.setItem(recipeTitle, recipeDetails);
		} else {
			alert("Sorry, we cannot run the 'Recipes' app on your browser.")
		}
	}

	render() {
		return (
			<Provider store={reduxStore}>
				<RecipeApp />
			</Provider>
		)
	}
}