export const REACHED_LEVEL = "reachedLevel";
export const PWA_INSTALL_SHOWN = "pwaInstallShown";
export const FIRST_TIME = "firstTime";
export const OBJECTIVES_STORED_ID = "objectives";

const DEFAULT_DATA = {
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
		load();
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
