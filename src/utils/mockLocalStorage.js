const MockStorage = () => {
	let storage = {};
	
	const setItem = (prop, value) => {
		storage[prop] = value;
	};
	
	const getItem = (prop) => {
		return storage[prop];
	};
	
	const removeItem = (prop) => {
		storage[prop] = undefined;
	};
	
	const clear = () => {
		storage = {};
	};
	
	return {
		setItem,
		getItem,
		removeItem,
		clear
	};
};

export const checkLocalStorage = () => {
	try {
		localStorage.getItem('_TEST_KEY_');
		return false;
	} catch (e) {
		delete window.localStorage;
		window.localStorage = MockStorage();
		return true;
	}
};
