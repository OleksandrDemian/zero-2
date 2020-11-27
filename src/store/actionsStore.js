import {writable} from "svelte/store";
import NumbersStore from "./numbersStore";
import {createAction, DIV, MULT, SUB, SUM} from "../game/action";

const { set, update, subscribe } = writable([]);

const useAction = (action) => {
	if(!action.used) {
		const used = NumbersStore.applyAction(action);
		
		if(used){
			update(actions => {
				const newActions = [];
				
				for(const a of actions){
					if(a === action){
						a.used = true;
					}
					
					newActions.push(a);
				}
				
				return newActions;
			});
		}
	}
};

const init = actions => set(actions.map(action => createAction(action.type, action.value)));

const ActionsStore = {
	subscribe,
	useAction,
	init
};

export default ActionsStore;
