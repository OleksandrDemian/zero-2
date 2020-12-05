import {writable} from "svelte/store";

const {set, subscribe, update} = writable({
	routes: {},
	history: [],
	current: {
		to: "",
		props: null
	}
});

const addRoute = (to, component) => {
	update(store => {
		store.routes[to] = component;
		
		return {...store};
	});
};

const navigate = (to, props) => {
	history.pushState(null, "Zero.2", null);
	
	update(state => {
		state.history.push(state.current);
		state.current = {to, props};
		return {...state};
	});
};

const back = () => {
	update(state => {
		state.current = state.history.pop();
		return {...state};
	});
};

window.addEventListener("popstate", back, false);

const router = {
	subscribe,
	addRoute,
	navigate,
	back
};

export default router;
