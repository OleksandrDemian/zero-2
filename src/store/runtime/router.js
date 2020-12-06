import store from "./store";

const DEFAULT_ROUTE_SETTINGS = {
	showBack: false
};

const {set, get, subscribe, update} = store({
	routes: {},
	history: [],
	current: {
		to: "",
		props: null
	}
});

const addRoute = (to, component, settings = null) => {
	update(store => {
		if(settings == null){
			settings = Object.assign({}, DEFAULT_ROUTE_SETTINGS);
		} else {
			settings = Object.assign({}, DEFAULT_ROUTE_SETTINGS, settings);
		}
		
		store.routes[to] = { component, settings };
		
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

const getRoute = (to) => get().routes[to];
window.addEventListener("popstate", back, false);

const router = {
	subscribe,
	addRoute,
	navigate,
	back,
	getRoute
};

export default router;
