import { createStore } from "redux";
import { v4 } from "node-uuid";
import recipeReducer from "./reducers/recipeReducer";
import { loadState, saveState } from "./localStorage"

// Set some placeholder recipes, to show of but can also be interacted with
const recipeList = [
	{
    name: "Achar Gosht with Chicken",
    id: v4(),
    list: ["Chicken: 1kg", "Yogurt: 1/2kg", "Tomato paste: 1 cup", "Garlic ginger: 1 Tbsp", "Red chili powder: as required", "Cumin: as required",
    				"Salt: to taste", "Green chili: 50 grams", "Achar Masala/spice: as required", "Kalunji: as required", "Saunf: as required",
    				"Fenugreek seeds: as required"],
		text: `First make the mixture of ginger, chili powder, salt, garlic and yogurt. Now soak the meat in this mixture for 2 hours. Heat the oil, put the spiced meat and fry until spices are separated. Add water and cook on low flame until the meat is tender.\n
						Grind the achaar spice and add 1 teaspoon salt to it. Slit green chilies vertically from one side and take its seeds out. Now fill green chilies with ground achaar spice.
						When the water dries out from meat, pour tomato paste, garnish cooked meat with stuffed chilies and put the remaining achaar spice. Now lower the heat and leave it for dam until chilies are tender. Then, sit down and enjoy Jodha Akbar with Farzana and eat with your (or her) hand(s).`,
	},
	{
    name: "Gnocci Pesto with Shrimp",
    id: v4(),
    list: ["Water: 2 quarts", "Gnocchi: 16 ounces", "Asparagus: 4 cups", "Shrimp: 1 pound, chopped", "Basil: 1 cup", "Pine nuts: 2 Tbsp, toasted",
    				"Garlic: 2 tsp, minced", "Lemon juice: 2 tsp", "Extravirgin olive oil: 4 tsp", "Salt: 1/4 tsp"],
		text: `Bring 2 quarts water to a boil and add gnocchi to pan; cook for 4 minutes or until done (gnocchi will rise to the surface). Remove gnocchi with a slotted spoon; place in a large bowl. Add asparagus and shrimp to pan; cook 5 minutes or until shrimp are done. Drain. Add shrimp mixture to gnocchi.\n
					  Combine remaining 1 tablespoon water, basil, and next 4 ingredients (through garlic) in a food processor; process until smooth, scraping sides. Drizzle oil through food chute with food processor on; process until well blended. Add salt and basil mixture to shrimp mixture; toss to coat. Serve immediately.`,
	},
];

// Save result of our loadState function that checks for localstorage key named 'state'
let persistedState = [];
persistedState = loadState();
// Check if that array is empty, if so add our placeholder recipes
if(persistedState.length === 0) {
	persistedState = recipeList;
}
// Subscribe to call the saveState function any time the state changes
const store = createStore(recipeReducer, persistedState);
store.subscribe(() => {
	saveState(store.getState());
});
// Export all the fun
export default store;