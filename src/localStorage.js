import { v4 } from "node-uuid";
// loadState will check if we have a stored key in localStorage called 'state', if not, return undefined to let the program run without issue
// if there is, parse the value and return it. with errors, return undefined to continue the program
export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if(serializedState === null) {
			const recipeList = [
				{
			    name: "Achar Gosht with Chicken",
			    id: v4(),
			    list: ["Chicken: 1kg", "Yogurt: 1/2kg", "Tomato paste: 1 cup", "Garlic ginger: 1 Tbsp", "Red chili powder: as required", "Cumin: as required",
			    				"Salt: to taste", "Green chili: 50 grams", "Achar Masala/spice: as required", "Kalunji: as required", "Saunf: as required",
			    				"Fenugreek seeds: as required"],
					text: `First make the mixture of ginger, chili powder, salt, garlic and yogurt. Now soak the meat in this mixture for 2 hours. Heat the oil, put the spiced meat and fry until spices are separated. Add water and cook on low flame until the meat is tender.\n
									Grind the achaar spice and add 1 teaspoon salt to it. Slit green chilies vertically from one side and take its seeds out. Now fill green chilies with ground achaar spice.
									When the water dries out from meat, pour tomato paste, garnish cooked meat with stuffed chilies and put the remaining achaar spice. Now lower the heat and leave it for dam until chilies are tender. Then, sit down and enjoy Jodha Akbar with a beautiful girl named Farzana and eat with your hand or let her feed you (best).`,
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
			return recipeList;
		}
		return JSON.parse(serializedState);
	} catch(err) {
		return undefined;
	}
};

// saveState saves the state as a stringified object, saves the state in localstorage as 'state'
export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch(err) {
		console.log("saveState function failed, ", err)
	}
}