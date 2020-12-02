import {writable} from "svelte/store";

const { update, subscribe } = writable({
	snacks: []
});

const showSnack = (snack) => {
	update(store => {
		store.snacks.push(snack);
		return { ...store }
	});
};

const removeSnack = (snack) => {
	update(store => {
		store.snacks.filter(cur => cur !== snack);
		return { ...store };
	});
};

const shift = () => {
	update(store => {
		if(store.snacks[0].onClose){
			store.snacks[0].onClose();
		}
		
		store.snacks.shift();
		return { ...store };
	});
};

const SnackBarStore = {
	subscribe,
	showSnack,
	removeSnack,
	shift
};

export default SnackBarStore;
