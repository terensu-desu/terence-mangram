import * as actionTypes from "./actionTypes";

export const addNewRecipe = (newRecipe) => {
	const updatedRecipe = {
		...newRecipe,
		id: Math.floor(Math.random() * 1415)
	};
	saveRecipeToLocalStorage(updatedRecipe);
	return {
		type: actionTypes.ADD_RECIPE,
		recipe: updatedRecipe
	};
};
export const addLocalRecipe = (localRecipe) => {
	return {
		type: actionTypes.ADD_RECIPE,
		recipe: localRecipe
	};
};
export const editRecipe = (id, keyName, value) => {
	return {
		type: actionTypes.EDIT_RECIPE,
		id: id,
		keyName: keyName,
		value: value
	};
};
export const setRetrievedState = () => {
	return {
		type: actionTypes.SET_RETRIEVED_STATE
	}
}
export const removeRecipe = id => {
	removeRecipeFromLocalStorage(id);
	return {
		type: actionTypes.REMOVE_RECIPE,
		id: id
	};
};
export const resetRecipes = () => {
	localStorage.clear();
};
const saveRecipeToLocalStorage = (recipe) => {
	if(localStorage.getItem("recipes")) {
		const newStorage = JSON.parse(localStorage.getItem("recipes"));
		newStorage.push(recipe);
		localStorage.setItem("recipes", JSON.stringify(newStorage));
	} else {
		const recipeStorage = [recipe];
		localStorage.setItem("recipes", JSON.stringify(recipeStorage));
	}
};
const removeRecipeFromLocalStorage = (idToRemove) => {
	if(localStorage.getItem("recipes")) {
		const newStorage = JSON.parse(localStorage.getItem("recipes"))
			.filter(recipe => recipe.id !== idToRemove);
		localStorage.setItem("recipes", JSON.stringify(newStorage));
	}
};