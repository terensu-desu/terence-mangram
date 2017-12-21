import React, { Component } from 'react';
import Recipes from '../components/Recipes';

export default class RecipeApp extends Component {
	constructor() {
		super();
		this.state = {
			recipes: [],
			addedRecipes: []
		}
	}

	storage(recipe) {
		if(typeof(Storage) !== "undefined") {
			localStorage.setItem(recipe);
			const oldState = {...this.state}
			this.setState({
				recipes: {}
			})
		} else {
			alert("Sorry, we cannot run the 'Recipes' app on your browser.")
		}
	}

	render() {
		return <Recipes recipes={this.state} />
	}
}