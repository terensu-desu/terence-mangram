// loadState will check if we have a stored key in localStorage called 'state', if not, return undefined to let the program run without issue
// if there is, parse the value and return it. with errors, return undefined to continue the program
export const loadState = () => {
	localStorage.clear();
	try {
		const serializedState = localStorage.getItem('state');
		if( serializedState === null) {
			return undefined;
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