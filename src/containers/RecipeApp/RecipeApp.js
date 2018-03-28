import React, { Component } from "react";
import { connect } from "react-redux";
import Recipes from "../../components/Recipes/Recipes";
import * as actions from "../../store/actions/";

class RecipeApp extends Component {
	componentWillMount() {
		if(localStorage.recipes && !this.props.retrievedLocal) {
			const recipes = JSON.parse(localStorage.getItem("recipes"));
			for(let recipe of recipes) {
				this.props.addLocalRecipe(recipe);
			}
			this.props.setRetrievedState();
		} else if(!localStorage.recipes && !this.props.retrievedLocal) {
			const recipeList = [
				{
			    name: "Achar Gosht with Chicken",
			    ingredients: ["Chicken: 1kg", "Yogurt: 1/2kg", "Tomato paste: 1 cup", "Garlic ginger: 1 Tbsp", "Red chili powder: as required", "Cumin: as required",
			    				"Salt: to taste", "Green chili: 50 grams", "Achar Masala/spice: as required", "Kalunji: as required", "Saunf: as required",
			    				"Fenugreek seeds: as required"],
					text: `First make the mixture of ginger, chili powder, salt, garlic and yogurt. Now soak the meat in this mixture for 2 hours. Heat the oil, put the spiced meat and fry until spices are separated. Add water and cook on low flame until the meat is tender.\n
Grind the achaar spice and add 1 teaspoon salt to it. Slit green chilies vertically from one side and take its seeds out. Now fill green chilies with ground achaar spice.\n
When the water dries out from meat, pour tomato paste, garnish cooked meat with stuffed chilies and put the remaining achaar spice. Now lower the heat and leave it for dam until chilies are tender. Then, sit down and enjoy Jodha Akbar with a beautiful girl named Farzana and eat with your hand or let her feed you (best).`,
				},
				{
			    name: "Gnocci Pesto with Shrimp",
			    ingredients: ["Water: 2 quarts", "Gnocchi: 16 ounces", "Asparagus: 4 cups", "Shrimp: 1 pound, chopped", "Basil: 1 cup", "Pine nuts: 2 Tbsp, toasted",
			    				"Garlic: 2 tsp, minced", "Lemon juice: 2 tsp", "Extravirgin olive oil: 4 tsp", "Salt: 1/4 tsp"],
					text: `Bring 2 quarts water to a boil and add gnocchi to pan; cook for 4 minutes or until done (gnocchi will rise to the surface). Remove gnocchi with a slotted spoon; place in a large bowl. Add asparagus and shrimp to pan; cook 5 minutes or until shrimp are done. Drain. Add shrimp mixture to gnocchi.\n
Combine remaining 1 tablespoon water, basil, and next 4 ingredients (through garlic) in a food processor; process until smooth, scraping sides. Drizzle oil through food chute with food processor on; process until well blended. Add salt and basil mixture to shrimp mixture; toss to coat. Serve immediately.`,
				},
			];
			for(let recipe of recipeList) {
				this.props.addNewRecipe(recipe);
			}
			this.props.setRetrievedState();
		}
	}

	render() {
		return (
			<Recipes
				recipes={this.props.recipes}
				addNewRecipe={this.props.addNewRecipe}
				editRecipe={this.props.editRecipe}
				removeRecipe={this.props.removeRecipe}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		recipes: state.recipes.recipeList,
		retrievedLocal: state.recipes.retrievedLocal
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addNewRecipe: (recipe) => {
			dispatch(actions.addNewRecipe(recipe));
		},
		addLocalRecipe: (recipe) => {
			dispatch(actions.addLocalRecipe(recipe));
		},
		editRecipe: (id, updatedInfo) => {
			dispatch(actions.editRecipe(id, updatedInfo));
		},
		setRetrievedState: () => dispatch(actions.setRetrievedState()),
		removeRecipe: id => dispatch(actions.removeRecipe(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeApp);
