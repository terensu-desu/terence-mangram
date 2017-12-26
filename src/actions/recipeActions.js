import { v4 } from "node-uuid";

export function addRecipe(name, list, text, id) {
	return {
		type: 'ADD_RECIPE',
		id: v4(),
		name,
		list,
		text
	}
}
export function editRecipe(index, propName, value) {
	return {
		type: 'EDIT_RECIPE',
		index,
		propName,
		value
	}
}
export function editRecipeSave(index, name, list, text) {
	return {
		type: 'EDIT_RECIPE_SAVE',
		index,
		name,
		list,
		text,
	}
}
export function removeRecipe(index) {
	return {
		type: 'REMOVE_RECIPE',
		index
	}
}