import * as actionTypes from "../actions/actionTypes";

const initialState = {
	recipeList: [],
	retrievedLocal: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_RECIPE:
			return {
				...state,
				recipeList: state.recipeList.concat(action.recipe)
			};
		case actionTypes.EDIT_RECIPE:
			const editIndex = state.recipeList.findIndex(recipe => recipe.id === action.id);
			const editedRecipe = { 
				...state.recipeList[editIndex],
				...action.newInfo
			};
			const newRecipeList = [
				...state.recipeList.slice(0, editIndex),
				editedRecipe,
				...state.recipeList.slice(editIndex + 1)
			];
			return {
				...state,
				recipeList: newRecipeList
			};
		case actionTypes.SET_RETRIEVED_STATE:
			return {
				...state,
				retrievedLocal: true
			};
		case actionTypes.REMOVE_RECIPE:
			const updatedRecipeList = state.recipeList.filter(recipe => recipe.id !== action.id);
			return {
				...state,
				recipeList: updatedRecipeList
			};
		default:
			return { ...state };
	}
};

export default reducer;