export const LEVEL_INDEX = "levelIndex";
export const REACHED_LEVEL = "reachedLevel";

const DEFAULT_DATA = {
	levelIndex: 0,
	reachedLevel: 0
};

const store = {
	data: null,
	loaded: false
};

const isLoaded = () => {
	return store.loaded;
};

const load = () => {
	try {
		const stored = localStorage.getItem("gameStore");
		if(stored == null){
			store.data = Object.assign({}, DEFAULT_DATA);
		} else {
			store.data = JSON.parse(stored);
		}
	} catch (e) {
		store.data = Object.assign({}, DEFAULT_DATA);
	}
	
	store.loaded = true;
};

const save = () => {
	const json = JSON.stringify(store.data);
	localStorage.setItem("gameStore", json);
};

const set = (prop, value) => {
	if(!isLoaded()){
		//?
		throw "Store must be loaded before updating!";
	}
	store.data[prop] = value;
};

const update = (prop, updater) => {
	const newVal = updater(store.data);
	set(prop, newVal);
};

const get = (prop) => {
	if(!isLoaded()){
		load();
	}
	
	const val = store.data[prop];
	
	if(val === undefined){
		return DEFAULT_DATA[prop]
	} else {
		return store.data[prop];
	}
};

const PersistentStore = {
	isLoaded,
	load,
	save,
	set,
	get,
	update
};

export default PersistentStore;
