import {writable} from "svelte/store";

const store = function (def) {
	let helper = null;
	const { set, subscribe, update } = writable(def);
	
	subscribe(val => helper = val);
	
	const get = () => helper;
	
	return {
		get, set, subscribe, update
	}
};

export default store;
