const recipeReducer = (state = {}, action) => {
	switch (action.type) {
		case "ADD_RECIPE":
			return [
				{
					name: action.name,
					list: action.list,
					text: action.text,
					id: action.id
				},
				...state
			]
		case "EDIT_RECIPE":
			return [
				...state[action.index] = {
					[action.propName]: action.value
				}
			]
		case "EDIT_RECIPE_SAVE":
			return [				
				...state,
				state[action.index] = {
					name: action.name,
					list: action.list,
					text: action.text
				}
			]
		case "REMOVE_RECIPE":
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1)
			]
		default:
			return state
	}
}

export default recipeReducer;