import { createStore } from "redux";
import recipeReducer from "./reducers/recipeReducer";
import { loadState, saveState } from "./localStorage"

// Save result of our loadState function that checks for localstorage key named 'state'
let persistedState = loadState();
// Subscribe to call the saveState function any time the state changes
const store = createStore(recipeReducer, persistedState);
store.subscribe(() => {
	saveState(store.getState());
});
// Export all the fun
export default store;