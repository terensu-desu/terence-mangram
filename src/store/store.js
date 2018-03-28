import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import recipeListReducer from "./reducers/recipeList.js";

const rootReducer = combineReducers({
	recipes: recipeListReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;