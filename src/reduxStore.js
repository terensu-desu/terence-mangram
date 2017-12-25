import { createStore } from "redux";
import recipeReducer from "./reducers/recipeReducer";

const recipeList = [
	{
    name: "Mac & Cheese",
    list: ["1 cup of cheese", "1 pound of mac noodles", "whatever you like"],
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
	},
	{
    name: "Gnocci Pesto",
    list: ["2 cups of pesto", "1 kilogram of gnocci", "500 ml of olive oil", "1 clove of garlic", "some pine nuts"],
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
	},
];

export default createStore(recipeReducer, recipeList);